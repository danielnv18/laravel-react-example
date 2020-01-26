@extends('layouts.app')

@section('content')
    <header class="flex-row">
        <h1>Edit {{ $store->name }} Store</h1>
        @include('share.delete', ['parameters' => $store, 'route' => 'stores.destroy'])
    </header>

    <div class="container-fluid">
        <div class="row">
            <form action="{{ route('stores.update', $store) }}" method="post">
                @csrf
                @method('PUT')
                @include('stores.form', ['store' => $store])
            </form>

        </div>
    </div>

@endsection

