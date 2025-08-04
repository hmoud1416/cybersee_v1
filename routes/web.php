<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ElasticsearchSettingsController;

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

Route::prefix('elasticsearch')->name('elasticsearch.')->group(function () {
    Route::get('/', fn () => redirect()->route('elasticsearch.connection'));
    Route::get('/connection', [ElasticsearchSettingsController::class, 'edit'])->name('connection');
    Route::post('/connection', [ElasticsearchSettingsController::class, 'update'])->name('connection.update');
    Route::view('/indices', 'elasticsearch.indices')->name('indices');
    Route::view('/search', 'elasticsearch.search')->name('search');
    Route::view('/documents', 'elasticsearch.documents')->name('documents');
    Route::view('/monitoring', 'elasticsearch.monitoring')->name('monitoring');
});
