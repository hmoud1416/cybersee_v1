<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title')</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" rel="stylesheet">
</head>
<body>
<div class="container-fluid">
    <div class="row">
        <nav class="col-md-2 d-none d-md-block bg-light sidebar">
            <div class="position-sticky pt-3">
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <span class="nav-link"><i class="bi bi-hdd-network me-2"></i>Elasticsearch</span>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link @if(request()->routeIs('elasticsearch.connection')) active @endif" href="{{ route('elasticsearch.connection') }}">
                            <i class="bi bi-plug me-2"></i>الاتصال
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link @if(request()->routeIs('elasticsearch.indices')) active @endif" href="{{ route('elasticsearch.indices') }}">
                            <i class="bi bi-list-ul me-2"></i>الفهارس
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link @if(request()->routeIs('elasticsearch.search')) active @endif" href="{{ route('elasticsearch.search') }}">
                            <i class="bi bi-search me-2"></i>البحث
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link @if(request()->routeIs('elasticsearch.documents')) active @endif" href="{{ route('elasticsearch.documents') }}">
                            <i class="bi bi-file-earmark-text me-2"></i>الوثائق
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link @if(request()->routeIs('elasticsearch.monitoring')) active @endif" href="{{ route('elasticsearch.monitoring') }}">
                            <i class="bi bi-graph-up me-2"></i>المراقبة
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <h1 class="mt-4">@yield('title')</h1>
            @yield('content')
        </main>
    </div>
</div>
</body>
</html>
