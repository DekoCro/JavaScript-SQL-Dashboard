export default class Customer {
    constructor() {
        this.data = [];

        fetch('data/customers.json')
        .then(response => response.json())
        .then(data => {
             this.data = data;
             console.log(data);
             this.showData();
        })
        let input = document.querySelector("#name_input");
        input.addEventListener('keyup', () => {
            this.update();
        })
    }

    showData() {
        // creating new table child element
        let element = document.createElement('tbody');
        let data = this.data.length
        element.className = 'row';
        document.querySelector('#customer_table').appendChild(element); 

        // filling the data in the table
        for(let r = 0; r < data; r++) {
            element.innerHTML += "<tr>"
            element.innerHTML += "<td class='column2'>" + this.data[r].Name + "</td><td class='column3'>" + this.data[r].DevicesCount + "</td>";
            element.innerHTML += "</tr>"
        }

        let chart = document.querySelector('#chartOne').getContext('2d');
        this.customerChart = new Chart(chart, {
            type: 'horizontalBar',
            data: {
                labels: this.data.map(item => item.Name),
                datasets: [{
                    label: "Devices",
                    data: this.data.map(item => item.DevicesCount),
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

    update(){
        let input = document.querySelector("#name_input");
        let filter = input.value.toUpperCase();
        let data = this.data.filter(item => {
            let customerName = item.Name.toUpperCase();
            return customerName.indexOf(filter) > -1;
        })

        this.customerChart.data.labels = data.map(item => item.Name);
        this.customerChart.data.datasets[0].data = data.map(item => item.DevicesCount);

        this.customerChart.update();
        
    }
}