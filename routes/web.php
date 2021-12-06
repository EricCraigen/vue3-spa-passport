<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/{any}', function () {
    return view('vue-app');
})->where('any', '.*');

// App::missing(function($exception)
// {
//     return View::make('notfound');
// });

// Route::view('/{any?}', 'welcome')
//     ->where('any', '\*')
//     ->name('vue-app');
