<?php

namespace App\Http\Controllers;

use App\Store;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class StoreController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\View\View
     */
    public function index()
    {
        $stores = Store::all();

        return view('stores.index', [
            'stores' => $stores
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\View\View
     */
    public function create()
    {
        return view('stores.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required',
            'address' => 'required'
        ]);

        Store::create($data);

        return redirect()->route('stores.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Store  $store
     * @return \Illuminate\View\View
     */
    public function show(Store $store)
    {
        return view('stores.show', [
            'store' => $store,
            'articles' => []
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Store  $store
     * @return \Illuminate\View\View
     */
    public function edit(Store $store)
    {
        return view('stores.edit', [
            'store' => $store
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Store  $store
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(Request $request, Store $store)
    {
        $data = $request->validate([
            'name' => 'required',
            'address' => 'required'
        ]);

        $store->name = $data['name'];
        $store->address = $data['address'];

        $store->save();

        return redirect()->route('stores.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Store $store
     *
     * @return \Illuminate\Http\RedirectResponse
     * @throws \Exception
     */
    public function destroy(Store $store)
    {

        $store->delete();
        return redirect()->route('stores.index');
    }
}
