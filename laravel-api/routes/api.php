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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('adduser', 'App\Http\Controllers\Userlist@addUser');
Route::get('adduser', 'App\Http\Controllers\Userlist@addUser');
Route::get('userlist', 'App\Http\Controllers\Userlist@getUserList');
Route::get('deleteuser/{id}', 'App\Http\Controllers\Userlist@deleteUser');


Route::post('createemployee', 'App\Http\Controllers\AdminController@createEmployee');
Route::get('employeelist', 'App\Http\Controllers\AdminController@employeeList');