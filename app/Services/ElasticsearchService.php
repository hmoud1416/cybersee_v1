<?php

namespace App\Services;

use Elastic\Elasticsearch\ClientBuilder;

class ElasticsearchService
{
    protected $client;

    public function __construct()
    {
        $hosts = [
            [
                'host' => config('elasticsearch.host'),
                'port' => config('elasticsearch.port'),
                'user' => config('elasticsearch.username'),
                'pass' => config('elasticsearch.password'),
            ],
        ];

        $this->client = ClientBuilder::create()->setHosts($hosts)->build();
    }

    public function ping(): bool
    {
        try {
            return $this->client->ping()->asBool();
        } catch (\Throwable $e) {
            return false;
        }
    }
}

