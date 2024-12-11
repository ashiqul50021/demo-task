<?php

use App\Http\Controllers\ProductController;
use App\Http\Middleware\HandleInertiaRequests;
use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return view('app');
});



Route::middleware([HandleInertiaRequests::class])
    ->group(function () {
        Route::get('/products', [ProductController::class, 'index']);
    });