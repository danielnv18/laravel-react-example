@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <form action="{{ route('stores.store') }}" method="post">
                @csrf
                @include('stores.form')
            </form>
        </div>
    </div>

@endsection

