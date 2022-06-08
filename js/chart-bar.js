var ctx = document.getElementById('bar-graph').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'],
        datasets: [{
                label: 'Apostas',
                data: [0, 0, 0, 0, 0, 0, 0],
                backgroundColor: [
                    '#0d6efd'

                ],
                borderColor: [
                    'grey'

                ],
                borderWidth: 1
            }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: 0
            }
        }
    }
});