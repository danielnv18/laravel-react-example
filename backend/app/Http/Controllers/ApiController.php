<?php

namespace App\Http\Controllers;

use App\Article;
use App\Store;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function getStores()
    {
        $stores = Store::all();
        return [
            'stores' => $stores,
            'success' => TRUE,
            'total_elements' => 2
        ];
    }

    public function getArticles()
    {
        $articles = Article::all();
        return [
            'articles' => $articles,
            'success' => TRUE,
            'total_elements' => 2
        ];
    }

    public function getArticlesByStore(Store $store)
    {
        return [
            'articles' => $store->articles()->get(),
            'success' => TRUE,
            'total_elements' => 2
        ];
    }


}
