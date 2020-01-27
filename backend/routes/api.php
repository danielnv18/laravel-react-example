<?php

use Illuminate\Http\Request;

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

Route::get('services/stores', 'Api\StoreApiController@index');
Route::post('services/stores', 'Api\StoreApiController@store');
Route::get('services/stores/{store}', 'Api\StoreApiController@show');
Route::put('services/stores/{store}', 'Api\StoreApiController@update');
Route::delete('services/stores/{store}', 'Api\StoreApiController@destroy');

Route::get('services/articles', 'Api\ArticleApiController@index');
Route::post('services/articles', 'Api\ArticleApiController@store');
Route::get('services/articles/{articles}', 'Api\ArticleApiController@show');
Route::put('services/articles/{articles}', 'Api\ArticleApiController@update');
Route::delete('services/articles/{articles}', 'Api\ArticleApiController@destroy');
Route::get('services/articles/stores/{store}', 'ApiController@getArticlesByStore');
