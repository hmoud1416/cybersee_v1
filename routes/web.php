<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ElasticsearchSettingsController;
use App\Http\Controllers\ElasticsearchStatusController;

use App\Http\Controllers\ElasticsearchIndexController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/elasticsearch/settings', [ElasticsearchSettingsController::class, 'edit'])
    ->name('elasticsearch.settings.edit');
Route::post('/elasticsearch/settings', [ElasticsearchSettingsController::class, 'update'])
    ->name('elasticsearch.settings.update');

Route::get('/elasticsearch/status', [ElasticsearchStatusController::class, 'index'])
    ->name('elasticsearch.status');
Route::get('/elasticsearch/status/data', [ElasticsearchStatusController::class, 'data'])
    ->name('elasticsearch.status.data');

Route::get('/elasticsearch/indices', [ElasticsearchIndexController::class, 'index'])
    ->name('elasticsearch.indices.index');
Route::post('/elasticsearch/indices', [ElasticsearchIndexController::class, 'store'])
    ->name('elasticsearch.indices.store');
Route::delete('/elasticsearch/indices/{index}', [ElasticsearchIndexController::class, 'destroy'])
    ->name('elasticsearch.indices.destroy');

Route::get('/elasticsearch/test', [ElasticsearchSettingsController::class, 'test'])
    ->name('elasticsearch.settings.test');
