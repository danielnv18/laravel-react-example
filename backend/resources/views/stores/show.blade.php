@extends('layouts.app')

@section('content')
    <div class="jumbotron">
        <h1 class="display-4">{{ $store->name }}</h1>
        <p class="lead">{{ $store->address }}</p>
        <hr class="my-4">
        <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
            <div class="btn-group btn-group-lg" role="group" aria-label="First group">
                <a class="btn btn-primary btn-lg" href="{{ route('stores.edit', ['store' => $store]) }}" role="button">Edit Store</a>
                <a class="btn btn-primary btn-lg" href="{{ route('stores.articles.create', $store) }}" role="button">Create Article</a>
            </div>
        </div>

    </div>

    <h2>Articles</h2>
    <table class="table">
        <thead>
        <tr>
            <th scope="col">Name</th>
            <th scope="col">description</th>
            <th scope="col">Price</th>
            <th scope="col">Total in shelf</th>
            <th scope="col">Total in vault</th>
            <th scope="col">Actions</th>
        </tr>
        </thead>
        <tbody>
        @foreach ($articles as $article)
            <tr>
                <th scope="row"><a href="{{ route('stores.articles.show', [$store, $article]) }}">{{ $article->name }}</a></th>
                <td>{{ $article->description }}</td>
                <td>{{ $article->price }}</td>
                <td>{{ $article->total_in_shelf }}</td>
                <td>{{ $article->total_in_vault }}</td>
                <td><a href="{{ route('stores.articles.edit', [$store, $article]) }}">Edit</a></td>
            </tr>
        @endforeach

        </tbody>
    </table>
@endsection

