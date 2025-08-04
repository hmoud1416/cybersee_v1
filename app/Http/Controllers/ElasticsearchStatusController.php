<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;

class ElasticsearchStatusController extends Controller
{
    public function index()
    {
        return view('elasticsearch.status');
    }

    public function data()
    {
        $host = rtrim(config('elasticsearch.host'), '/');
        $username = config('elasticsearch.username');
        $password = config('elasticsearch.password');

        $client = Http::baseUrl($host);
        if (!empty($username)) {
            $client = $client->withBasicAuth($username, $password);
        }

        $health = $client->get('/_cluster/health')->json();
        $stats = $client->get('/_cluster/stats')->json();

        return response()->json([
            'health' => $health,
            'stats' => $stats,
        ]);
    }
}

