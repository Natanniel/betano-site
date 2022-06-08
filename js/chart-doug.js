var dataDough = {
    datasets: [
        {
            data: [59, 41, 25, 34],
            backgroundColor: [
                "#0d6efd",
                "#2ecc71",
                "#dc3545",
                "#ffc107"
            ]

        }]
};

var doughnut = new Chart(document.getElementById('double-chart'), {
    type: 'doughnut',
    data: dataDough,
    options: {
        cutout: 20,
        maintainAspectRatio: false,
        responsive: true,
        legend: {
            display: false
        }
    }
});