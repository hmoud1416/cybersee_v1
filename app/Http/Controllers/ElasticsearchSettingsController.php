<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Artisan;
use App\Services\ElasticsearchService;

class ElasticsearchSettingsController extends Controller
{
    public function edit()
    {
        $settings = [
            'host' => config('elasticsearch.host'),
            'port' => config('elasticsearch.port'),
            'username' => config('elasticsearch.username'),
            'password' => config('elasticsearch.password'),
        ];

        return view('elasticsearch.settings', compact('settings'))->with('activeTab', 'settings');
    }

    public function update(Request $request)
    {
        $data = $request->validate([
            'host' => 'required|string',
            'port' => 'required|integer',
            'username' => 'nullable|string',
            'password' => 'nullable|string',
        ]);

        $this->updateEnv($data);

        Artisan::call('config:clear');

        config([
            'elasticsearch.host' => $data['host'],
            'elasticsearch.port' => $data['port'],
            'elasticsearch.username' => $data['username'],
            'elasticsearch.password' => $data['password'],
        ]);

        return redirect()->route('elasticsearch.settings.edit')->with('status', 'Elasticsearch settings updated.');
    }

    public function test(ElasticsearchService $service)
    {
        $settings = [
            'host' => config('elasticsearch.host'),
            'port' => config('elasticsearch.port'),
            'username' => config('elasticsearch.username'),
            'password' => config('elasticsearch.password'),
        ];

        $ping = $service->ping();

        return view('elasticsearch.settings', compact('settings', 'ping'))->with('activeTab', 'test');
    }

    protected function updateEnv(array $data)
    {
        $envPath = base_path('.env');
        if (!File::exists($envPath)) {
            File::put($envPath, '');
        }

        $envContent = File::get($envPath);

        foreach ($data as $key => $value) {
            $envKey = strtoupper('ELASTICSEARCH_' . $key);
            $pattern = "/^{$envKey}=.*/m";
            if (preg_match($pattern, $envContent)) {
                $envContent = preg_replace($pattern, "{$envKey}={$value}", $envContent);
            } else {
                $envContent .= PHP_EOL . "{$envKey}={$value}";
            }
        }

        File::put($envPath, $envContent);
    }
}

