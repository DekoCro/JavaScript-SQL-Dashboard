export default class Customer {
    constructor() {
        fetch('data/customers.json')
        .then(response => response.json())
        .then(data => {
             console.log(data);
             this.showData(data);
        })
    }

    showData(data) {
        // creating new table child element
        let element = document.createElement('tbody');
        element.className = 'row';
        document.querySelector('#customer_table').appendChild(element); 

        // filling the data in the table
        for(let r = 0; r < data.length; r++) {
            element.innerHTML += "<tr>"
            element.innerHTML += "<td class='column1'>" + data[r].CustomerId + "</td><td class='column2'>" + data[r].Name + "</td><td class='column3'>" + data[r].DevicesCount + "</td>";
            element.innerHTML += "</tr>"
        }

        let chart = document.querySelector('#chartOne').getContext('2d');
        let customerChart = new Chart(chart, {
            type: 'bar',
            data: {
                labels: data.map(item => item.Name),
                datasets: [{
                    label: 'All customers and the number of devices that they own',
                    data: data.map(item => item.DevicesCount),
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