<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Elasticsearch Status</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>
<div class="container mt-4">
    <h1>Elasticsearch Cluster Status</h1>
    <div class="my-3">
        <span>Cluster health: </span>
        <span id="cluster-status" class="fw-bold">loading...</span>
        <button id="refresh-btn" class="btn btn-secondary btn-sm ms-2">Refresh</button>
    </div>
    <canvas id="statsChart" width="400" height="200"></canvas>
</div>
<script>
    let chart;
    function initChart() {
        const ctx = document.getElementById('statsChart').getContext('2d');
        chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Nodes', 'Indices'],
                datasets: [{
                    label: 'Count',
                    data: [0, 0],
                    backgroundColor: ['#0d6efd', '#198754'],
                }]
            },
            options: {
                scales: {
                    y: { beginAtZero: true }
                }
            }
        });
    }

    async function fetchData() {
        try {
            const response = await fetch('{{ route('elasticsearch.status.data') }}');
            const data = await response.json();

            const statusEl = document.getElementById('cluster-status');
            statusEl.textContent = data.health.status;

            statusEl.className = 'fw-bold';
            if (data.health.status === 'green') {
                statusEl.classList.add('text-success');
            } else if (data.health.status === 'yellow') {
                statusEl.classList.add('text-warning');
            } else {
                statusEl.classList.add('text-danger');
            }

            const nodeCount = data.stats.nodes.count.total;
            const indexCount = data.stats.indices.count;
            chart.data.datasets[0].data = [nodeCount, indexCount];
            chart.update();
        } catch (e) {
            console.error(e);
        }
    }

    document.getElementById('refresh-btn').addEventListener('click', fetchData);

    initChart();
    fetchData();
    setInterval(fetchData, 10000);
</script>
</body>
</html>
