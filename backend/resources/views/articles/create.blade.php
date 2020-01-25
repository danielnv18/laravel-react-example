@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <form action="{{ route('stores.articles.store', $store) }}" method="post">
                @csrf
                @include('articles.form')
            </form>
        </div>
    </div>

@endsection

