<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
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
    public function index(Request $request)
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
    public function store(Request $request)
    {
        try {
            $data = $this->validate($request, $this->validateRules());
            $store = Store::create($data);
        } catch (\Exception $exception) {
            return $this->getBadRequest();
        }

        return new Response([
            'store' => $store,
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
            $store = Store::findOrFail($id);
        } catch (\Exception $exception) {
            return $this->getBadRequest();
        }

        return new Response([
            'store' => $store,
            'success' => TRUE,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        if (!is_numeric($id)) {
            return $this->getBadRequest();
        }

        try {
            $store = Store::findOrFail($id);
            $data = $this->validate($request, $this->validateRules());
            $store->update($data);
        } catch (\Exception $exception) {
            return $this->getBadRequest();
        }

        return new Response([
            'store' => $store,
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
            $store = Store::findOrFail($id);
            $store->delete();
        } catch (\Exception $exception) {
            return $this->getBadRequest();
        }

        return new Response([
            'success' => TRUE,
        ]);
    }

    private function validateRules()
    {
        return [
            'name' => 'required',
            'address' => 'required'
        ];
    }

    private function getBadRequest() {
        return new Response([
            'error_code' => 400,
            'success' => FALSE,
            'error_msg' => 'Bad request'
        ], 400);
    }
}
