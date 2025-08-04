<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Elasticsearch Settings</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
<div class="container-fluid">
    <div class="row">
        <nav class="col-md-2 d-none d-md-block bg-light sidebar">
            <div class="position-sticky pt-3">
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <span class="nav-link active">Settings</span>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('elasticsearch.indices.index') }}">Indices</a>
                    </li>
                </ul>
            </div>
        </nav>
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <h1 class="mt-4">Elasticsearch Settings</h1>
            @if(session('status'))
                <div class="alert alert-success">{{ session('status') }}</div>
            @endif
            <form method="POST" action="{{ route('elasticsearch.settings.update') }}" class="mt-4">
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
        </main>
    </div>
</div>
</body>
</html>
