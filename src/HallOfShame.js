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
        // creating new table child element
        let element = document.createElement('tbody');
        element.className = 'row';
        document.querySelector('#hall_of_shame_table').appendChild(element); 

        // filling the data in the table
        for(let r = 0; r < data.length; r++) {
            element.innerHTML += "<tr>"
            element.innerHTML += "<td class='column1'>" + data[r].CustomerId + "</td><td class='column2'>" + data[r].CustomerName + "</td><td class='column3'>" + data[r].SerialNumber + "</td><td class='column4'>" + data[r].AlarmsCount + "</td>";
            element.innerHTML += "</tr>"
        }

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