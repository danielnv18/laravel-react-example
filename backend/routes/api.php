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

Route::get('/services/stores', 'ApiController@getStores');

Route::get('/services/articles', 'ApiController@getArticles');

Route::get('/services/articles/stores/{store}', 'ApiController@getArticlesByStore');

Route::resource('/stores', 'StoreApiController');
