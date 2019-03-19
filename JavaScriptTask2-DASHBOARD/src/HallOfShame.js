export default class HallOfShame {
    constructor() {
        fetch('data/hallofshame.json')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.showData(data);
        })
    }
    
    showData(data) {
        // let color = 'rgba(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ', 0.4)';
        
        let chart = document.querySelector('#chartThree').getContext('2d');
            let hallChart = new Chart(chart, {
            type: 'pie',
            data: {
                labels: data.map(item => item.CustomerName),
                datasets: [{
                    label: 'Device with the highest number of alarms of each customer',
                    data: data.map(item => item.AlarmsCount),
                    backgroundColor: [
                        'red',
                        'green',
                        'blue',
                        'yellow',
                        'orange',
                        'purple',
                        'pink',
                        'brown',
                        'azure',
                        'chartreuse'
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