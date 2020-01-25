@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            Name: {{ $article->name }}
        </div>
        <div class="row">
            Description: {{ $article->description }}
        </div>
        <div class="row">
            Price: {{ $article->price }}
        </div>
        <div class="row">
            Total in shelf: {{ $article->total_in_shelf }}
        </div>
        <div class="row">
            Total in vault: {{ $article->total_in_vault }}
        </div>
    </div>
@endsection

