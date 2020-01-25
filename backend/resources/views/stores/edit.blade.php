@extends('layouts.app')

@section('content')
    @include('share.delete', ['parameters' => $store, 'route' => 'stores.destroy'])
    <div class="container">
        <div class="row">
            <form action="{{ route('stores.update', $store) }}" method="post">
                @csrf
                @method('PUT')
                @include('stores.form', ['store' => $store])
            </form>
        </div>
    </div>

@endsection

