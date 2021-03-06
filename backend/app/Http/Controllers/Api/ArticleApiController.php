<?php

namespace App\Http\Controllers\Api;

use App\Article;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ArticleApiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $articles = Article::all();

        return new Response([
            'articles' => $articles,
            'success' => TRUE,
            'count' => $articles->count(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            $data = $this->validate($request, $this->validateRules());
            $article = Article::create($data);
        } catch (\Exception $exception) {
            return $this->getBadRequest();
        }

        return new Response([
            'article' => $article,
            'success' => TRUE,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        if (!is_numeric($id)) {
            return $this->getBadRequest();
        }

        try {
            $article = Article::findOrFail($id);
        } catch (\Exception $exception) {
            return $this->getBadRequest();
        }

        return new Response([
            'article' => $article,
            'success' => TRUE,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        if (!is_numeric($id)) {
            return $this->getBadRequest();
        }

        try {
            $article = Article::findOrFail($id);
            $data = $this->validate($request, $this->validateRules());
            $article->update($data);
        } catch (\Exception $exception) {
            return $this->getBadRequest();
        }

        return new Response([
            'article' => $article,
            'success' => TRUE,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if (!is_numeric($id)) {
            return $this->getBadRequest();
        }

        try {
            $article = Article::findOrFail($id);
            $article->delete();
        } catch (\Exception $exception) {
            return $this->getBadRequest();
        }

        return new Response([
            'success' => TRUE,
        ]);
    }

    public function getArticlesByStore($id)
    {
        if (!is_numeric($id)) {
            return $this->getBadRequest();
        }

        try {
            $articles = Article::where('store_id', $id)->get();
        } catch (\Exception $exception) {
            return new Response([
                'error_code' => 400,
                'success' => FALSE,
                'error_msg' => $exception->getMessage()
            ], 404);
        }

        return new Response([
            'articles' => $articles,
            'success' => TRUE,
            'total_elements' => $articles->count()
        ]);

    }

    /**
     * Validation rules
     *
     * @return array
     */
    private function validateRules()
    {
        return [
            'name' => 'required',
            'description' => 'required',
            'price' => 'required',
            'total_in_shelf' => 'required',
            'total_in_vault' => 'required',
            'store_id' => 'required',
        ];
    }

    private function getBadRequest($message = 'Bad request') {
        return new Response([
            'error_code' => 400,
            'success' => FALSE,
            'error_msg' => $message
        ], 400);
    }
}
