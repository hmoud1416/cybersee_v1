<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Elasticsearch Indices</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
<div class="container-fluid">
    <div class="row">
        <nav class="col-md-2 d-none d-md-block bg-light sidebar">
            <div class="position-sticky pt-3">
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('elasticsearch.settings.edit') }}">Settings</a>
                    </li>
                    <li class="nav-item">
                        <span class="nav-link active">Indices</span>
                    </li>
                </ul>
            </div>
        </nav>
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <h1 class="mt-4">Elasticsearch Indices</h1>
            @if(session('status'))
                <div class="alert alert-success">{{ session('status') }}</div>
            @endif
            <form method="POST" action="{{ route('elasticsearch.indices.store') }}" class="mt-4">
                @csrf
                <div class="mb-3">
                    <label class="form-label" for="name">New Index Name</label>
                    <input class="form-control" type="text" id="name" name="name" required>
                </div>
                <button type="submit" class="btn btn-primary">Create</button>
            </form>
            <h2 class="mt-5">Existing Indices</h2>
            <table class="table mt-3">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                @forelse($indices as $index)
                    <tr>
                        <td>{{ $index['index'] ?? '' }}</td>
                        <td>
                            <form method="POST" action="{{ route('elasticsearch.indices.destroy', $index['index']) }}" onsubmit="return confirm('Delete this index?');">
                                @csrf
                                @method('DELETE')
                                <button type="submit" class="btn btn-danger btn-sm">Delete</button>
                            </form>
                        </td>
                    </tr>
                @empty
                    <tr>
                        <td colspan="2">No indices found.</td>
                    </tr>
                @endforelse
                </tbody>
            </table>
        </main>
    </div>
</div>
</body>
</html>
