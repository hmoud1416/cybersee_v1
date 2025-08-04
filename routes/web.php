<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ElasticsearchSettingsController;
use App\Http\Controllers\ElasticsearchStatusController;

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
