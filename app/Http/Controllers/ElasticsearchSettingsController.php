<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class ElasticsearchSettingsController extends Controller
{
    public function edit()
    {
        $settings = [
            'host' => config('elasticsearch.host'),
            'username' => config('elasticsearch.username'),
            'password' => config('elasticsearch.password'),
        ];

        return view('elasticsearch.connection', compact('settings'));
    }

    public function update(Request $request)
    {
        $data = $request->validate([
            'host' => 'required|string',
            'username' => 'nullable|string',
            'password' => 'nullable|string',
        ]);

        $this->updateEnv($data);

        return redirect()->back()->with('status', 'Elasticsearch settings updated.');
    }

    protected function updateEnv(array $data)
    {
        $envPath = base_path('.env');
        if (!File::exists($envPath)) {
            return;
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

