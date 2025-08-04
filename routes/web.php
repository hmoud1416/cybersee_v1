<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ElasticsearchSettingsController;
use App\Http\Controllers\ElasticsearchDocumentController;

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

Route::get('/elasticsearch/document', [ElasticsearchDocumentController::class, 'form'])
    ->name('elasticsearch.document.form');
Route::post('/elasticsearch/document', [ElasticsearchDocumentController::class, 'storeOrUpdate'])
    ->name('elasticsearch.document.store');
Route::delete('/elasticsearch/document', [ElasticsearchDocumentController::class, 'destroy'])
    ->name('elasticsearch.document.destroy');
