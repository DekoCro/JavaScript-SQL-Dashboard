export default class HallOfShame {
    constructor() {
        this.data = fetch('data/hallodshame.json')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.showData(data);
        })
    }
    

    showData(data) {
        let color = 'rgba(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ', 0.4)';
        
        let chart3 = document.querySelector('#chartThree').getContext('2d');
            let hallChart = new Chart(chart3, {
            type: 'bar',
            data: {
                labels: data.map(item => item.CustomerName),
                datasets: [{
                    label: 'Number of Alarms per customer',
                    data: data.map(item => item.AlarmsCount),
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(88, 247, 64, 0.2)',
                        // 'rgba(33, 159, 2, 0.2)',
                        // 'rgba(200, 45, 88, 0.2)',
                        // 'rgba(189, 22, 133, 0.2)',
                        // 'rgba(12, 133, 22, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }
}