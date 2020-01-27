<?php

namespace App\Http\Controllers;

use App\Store;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class StoreApiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $stores = Store::all();

        return new Response([
            'stores' => $stores,
            'success' => TRUE,
            'count' => $stores->count(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store($store_id)
    {
        if (!is_numeric($store_id)) {
            return $this->getBadRequest();
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Store  $store
     * @return \Illuminate\Http\Response
     */
    public function show($store_id)
    {
        if (!is_numeric($store_id)) {
            return $this->getBadRequest();
        }

        try {
            $store = Store::findOrFail($store_id);
        } catch (\Exception $exception) {
            return $this->getBadRequest();
        }

        return new Response([
            'store' => $store,
            'success' => TRUE,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Store  $store
     * @return \Illuminate\Http\Response
     */
    public function edit($store_id)
    {
        if (!is_numeric($store_id)) {
            return $this->getBadRequest();
        }

        $stores = Store::all();

        return new Response([
            'store' => $stores,
            'success' => TRUE,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Store  $store
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $store_id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Store  $store
     * @return \Illuminate\Http\Response
     */
    public function destroy($store_id)
    {
        if (!is_numeric($store_id)) {
            return $this->getBadRequest();
        }
        
        return new Response([
            'success' => TRUE,
        ]);
    }

    private function getBadRequest() {
        return new Response([
            'error_code' => 400,
            'success' => FALSE,
            'error_msg' => 'Bad request'
        ], 400);
    }
}
