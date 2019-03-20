export default class HallOfShame {
    constructor() {
        this.data = [];

        fetch('data/hallofshame.json')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.data = data;
            this.showData();
        })
        let input = document.querySelector("#name_input");
        input.addEventListener('keyup', () => {
            this.update();
        })

    }
    
    showData() {
        // let color = 'rgba(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ', 0.4)';
        
        //parent element
        let chart = document.querySelector('#chartThree').getContext('2d');
        //mounting new chart
        this.hallChart = new Chart(chart, {
            type: 'pie',
            data: {
                labels: this.data.map(item => item.CustomerName),
                datasets: [{
                    label: 'Device with the highest number of alarms of each customer',
                    data: this.data.map(item => item.AlarmsCount),
                    backgroundColor: [
                        'red',
                        'green',
                        'blue',
                        'yellow',
                        'orange',
                        'purple',
                        'pink',
                        'brown',
                        'skyblue',
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

    update() {
        let input = document.querySelector("#name_input");
        let filter = input.value.toUpperCase();
        let data = this.data.filter(item => {
            let ucName = item.CustomerName.toUpperCase();
            return ucName.indexOf(filter) > -1;
        })

        this.hallChart.data.labels = data.map(item => item.CustomerName)
        this.hallChart.data.datasets[0].data = data.map(item => item.AlarmsCount)
        this.hallChart.update();
        
        console.log(data);
    }
}