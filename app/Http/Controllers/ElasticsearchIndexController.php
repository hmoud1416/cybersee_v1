<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ElasticsearchIndexController extends Controller
{
    protected function client()
    {
        $host = config('elasticsearch.host');
        if (! str_starts_with($host, 'http')) {
            $host = 'http://' . $host;
        }
        $host = rtrim($host, '/');

        $request = Http::baseUrl($host);

        $username = config('elasticsearch.username');
        $password = config('elasticsearch.password');
        if ($username && $password) {
            $request = $request->withBasicAuth($username, $password);
        }

        return $request;
    }

    public function index()
    {
        $response = $this->client()->get('/_cat/indices', ['format' => 'json']);
        $indices = $response->successful() ? $response->json() : [];

        return view('elasticsearch.indices', compact('indices'));
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string',
        ]);

        $this->client()->put('/' . $data['name']);

        return redirect()->route('elasticsearch.indices.index')
            ->with('status', 'Index created.');
    }

    public function destroy(string $index)
    {
        $this->client()->delete('/' . $index);

        return redirect()->route('elasticsearch.indices.index')
            ->with('status', 'Index deleted.');
    }
}

