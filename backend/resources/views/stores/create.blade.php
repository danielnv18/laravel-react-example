@extends('layouts.app')

@section('content')
    <h1>Create new Store</h1>
    <div class="container">
        <div class="row">
            <form action="{{ route('stores.store') }}" method="post">
                @csrf
                @include('stores.form')
            </form>
        </div>
    </div>

@endsection

