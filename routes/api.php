<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/add_card', [\App\Http\Controllers\CreditCardController::class, 'add_card']);
Route::get('/get_all_card', [\App\Http\Controllers\CreditCardController::class, 'get_all_card']);
Route::get('/delete_card/{id}', [\App\Http\Controllers\CreditCardController::class, 'delete_card']);
