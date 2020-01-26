@extends('layouts.app')

@section('content')
    <h1>Stores</h1>
    <table class="table">
        <thead>
        <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Address</th>
            <th scope="col">Actions</th>
        </tr>
        </thead>
        <tbody>
        @foreach ($stores as $store)
            <tr>
                <th scope="row">{{ $store->id }}</th>
                <td><a href="{{ route('stores.show', $store->id) }}">{{ $store->name }}</a></td>
                <td>{{ $store->address }}</td>
                <td>
                    <a class="btn btn-primary" href="{{ route('stores.edit', ['store' => $store]) }}" role="button">Edit</a>
                </td>
            </tr>
        @endforeach
        </tbody>
    </table>
    {{ $stores->links() }}

@endsection
