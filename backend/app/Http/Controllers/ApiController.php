<?php

namespace App\Http\Controllers;

use App\Article;
use App\Store;
use Illuminate\Http\Response;

class ApiController extends Controller
{

    public function getStores()
    {
        $stores = Store::all();
        return new Response([
            'stores' => $stores,
            'success' => TRUE,
            'total_elements' => $stores->count()
        ]);
    }

    public function getArticles()
    {
        $articles = Article::all();
        return [
            'articles' => $articles,
            'success' => TRUE,
            'total_elements' => $articles->count()
        ];
    }

    public function getArticlesByStore($store_id)
    {
        try {
            $store = Store::findOrFail($store_id);
        } catch (\Exception $exception) {
            return new Response([
                'error_code' => 400,
                'success' => FALSE,
                'error_msg' => 'Bad request'
            ], 400);
        }

        if ($store::count() == 0) {
            return new Response([
                'error_code' => 404,
                'success' => FALSE,
                'error_msg' => 'Record not found'
            ], 404);
        }

        $articles = $store->articles()->getRelated();
        return new Response([
            'articles' => $articles::all(),
            'success' => TRUE,
            'total_elements' => $articles->count()
        ]);

    }


}
