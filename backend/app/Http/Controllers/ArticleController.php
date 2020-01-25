<?php

namespace App\Http\Controllers;

use App\Article;
use App\Store;
use Illuminate\Http\Request;

class ArticleController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @param \App\Store $store
     *
     * @return \Illuminate\Http\RedirectResponse
     */
    public function index(Store $store)
    {
        return redirect()->route('stores.show', $store);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @param \App\Store $store
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function create(Store $store)
    {
        return view('articles.create', [
            'store' => $store
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \App\Store $store
     * @param \Illuminate\Http\Request $request
     *
     * @return \Illuminate\Http\RedirectResponse
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Store $store, Request $request)
    {
        $data = $this->validate($request, $this->validateRules());
        $store->articles()->create($data);

        return redirect()->route('stores.show', $store);
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Store $store
     *
     * @param \App\Article $article
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function show(Store $store, Article $article)
    {
        return view('articles.show', [
            'article' => $article
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Article  $article
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function edit(Store $store, Article $article)
    {
        return view('articles.edit', [
            'article' => $article,
            'store' => $store,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Store $store
     * @param \App\Article $article
     *
     * @return \Illuminate\Http\RedirectResponse
     * @throws \Illuminate\Validation\ValidationException
     */
    public function update(Request $request, Store $store, Article $article)
    {
        $data = $this->validate($request, $this->validateRules());
        $article->update($data);

        return redirect()->route('stores.show', $store);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Store $store
     * @param \App\Article $article
     *
     * @return \Illuminate\Http\RedirectResponse
     * @throws \Exception
     */
    public function destroy(Store $store, Article $article)
    {
        $article->delete();
        return redirect()->route('stores.show', $store);
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
            'total_in_vault' => 'required'
        ];
    }
}
