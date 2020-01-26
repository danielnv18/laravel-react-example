@extends('layouts.app')

@section('content')
    <div class="container pt-4">
        <div class="row">
            <div class="col-md-8">
                <img class="img-fluid" src="http://placehold.it/750x500" alt="">
            </div>
            <div class="col-md-4">
                <h3 class="my-3">{{ $article->name }}</h3>
                <p> {{ $article->description }}</p>
                <h3 class="my-3">Article Details</h3>
                <ul>
                    <li>Price: {{ $article->price }}</li>
                    <li>Total in shelf: {{ $article->total_in_shelf }}</li>
                    <li>Total in vault: {{ $article->total_in_vault }}</li>
                </ul>
            </div>
        </div>

    </div>
@endsection

