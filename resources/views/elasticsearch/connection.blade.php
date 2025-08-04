@extends('layouts.elasticsearch')

@section('title', 'Connection')

@section('content')
    @if(session('status'))
        <div class="alert alert-success">{{ session('status') }}</div>
    @endif
    <form method="POST" action="{{ route('elasticsearch.connection.update') }}" class="mt-4">
        @csrf
        <div class="mb-3">
            <label class="form-label" for="host">Host</label>
            <input class="form-control" type="text" id="host" name="host" value="{{ old('host', $settings['host']) }}" required>
        </div>
        <div class="mb-3">
            <label class="form-label" for="username">Username</label>
            <input class="form-control" type="text" id="username" name="username" value="{{ old('username', $settings['username']) }}">
        </div>
        <div class="mb-3">
            <label class="form-label" for="password">Password</label>
            <input class="form-control" type="password" id="password" name="password" value="{{ old('password', $settings['password']) }}">
        </div>
        <button type="submit" class="btn btn-primary">Save</button>
    </form>
@endsection
