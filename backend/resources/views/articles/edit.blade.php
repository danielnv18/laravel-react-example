@extends('layouts.app')

@section('content')
    @include('share.delete', ['parameters' => [$store, $article], 'route' => 'stores.articles.destroy'])
    <div class="container">
        <div class="row">
            <form action="{{ route('stores.articles.update', [$store, $article]) }}" method="POST">
                @csrf
                @method('PUT')
                @include('articles.form', ['article' => $article])
            </form>
        </div>
    </div>
@endsection

