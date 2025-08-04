<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ElasticsearchDocumentController extends Controller
{
    protected function client()
    {
        return Http::withBasicAuth(
            config('elasticsearch.username'),
            config('elasticsearch.password')
        )->baseUrl('http://' . config('elasticsearch.host'));
    }

    public function form()
    {
        return view('elasticsearch.document');
    }

    public function storeOrUpdate(Request $request)
    {
        $validated = $request->validate([
            'index' => 'required|string',
            'id' => 'nullable|string',
            'body' => 'required|json',
        ]);

        $client = $this->client();

        try {
            if (!empty($validated['id'])) {
                $response = $client->put("/{$validated['index']}/_doc/{$validated['id']}", json_decode($validated['body'], true));
            } else {
                $response = $client->post("/{$validated['index']}/_doc", json_decode($validated['body'], true));
            }

            if ($response->successful()) {
                return redirect()->back()->with('status', 'Document saved.');
            }

            return redirect()->back()->withErrors(['elasticsearch' => $response->body()]);
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['elasticsearch' => $e->getMessage()]);
        }
    }

    public function destroy(Request $request)
    {
        $validated = $request->validate([
            'index' => 'required|string',
            'id' => 'required|string',
        ]);

        $client = $this->client();

        try {
            $response = $client->delete("/{$validated['index']}/_doc/{$validated['id']}");

            if ($response->successful()) {
                return redirect()->back()->with('status', 'Document deleted.');
            }

            return redirect()->back()->withErrors(['elasticsearch' => $response->body()]);
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['elasticsearch' => $e->getMessage()]);
        }
    }
}
