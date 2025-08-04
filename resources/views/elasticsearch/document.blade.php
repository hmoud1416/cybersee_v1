<!DOCTYPE html>
<html>
<head>
    <title>Elasticsearch Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">
</head>
<body class="p-4">
<div class="container">
    <h1>Elasticsearch Document</h1>

    @if (session('status'))
        <div class="alert alert-success">{{ session('status') }}</div>
    @endif

    @if ($errors->any())
        <div class="alert alert-danger">
            <ul class="mb-0">
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif

    <form method="POST" action="{{ route('elasticsearch.document.store') }}" class="mb-4">
        @csrf
        <div class="mb-3">
            <label class="form-label">Index</label>
            <input type="text" name="index" class="form-control" required>
        </div>
        <div class="mb-3">
            <label class="form-label">ID (optional)</label>
            <input type="text" name="id" class="form-control">
        </div>
        <div class="mb-3">
            <label class="form-label">Body (JSON)</label>
            <textarea name="body" class="form-control" rows="5" required>{"field":"value"}</textarea>
        </div>
        <button type="submit" class="btn btn-primary">Save</button>
    </form>

    <form method="POST" action="{{ route('elasticsearch.document.destroy') }}" onsubmit="return confirm('Delete document?');">
        @csrf
        @method('DELETE')
        <div class="mb-3">
            <label class="form-label">Index</label>
            <input type="text" name="index" class="form-control" required>
        </div>
        <div class="mb-3">
            <label class="form-label">ID</label>
            <input type="text" name="id" class="form-control" required>
        </div>
        <button type="submit" class="btn btn-danger">Delete</button>
    </form>
</div>
</body>
</html>
