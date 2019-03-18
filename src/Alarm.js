// I have deleted all the dates from alarm.json EXCEPT JANUARY 2019 where the alarms acctually happen

export default class Alarm {
    constructor() {
        fetch('data/alarms.json')
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
        document.querySelector('#alarm_table').appendChild(element); 

        // filling the data in the table
        for(let r = 0; r < data.length; r++) {
            element.innerHTML += "<tr>"
            element.innerHTML += "<td class='customerId'>" + data[r].Date + "</td><td class='customerName'>" + data[r].AlarmType + "</td><td class='number'>" + data[r].AlarmsCount + "</td>";
            element.innerHTML += "</tr>"
        }
        // let color = 'rgba(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ', 0.4)';
        
        // let chart3 = document.querySelector('#chartTwo').getContext('2d');
        //     let hallChart = new Chart(chart3, {
        //     type: 'doughnut',
        //     data: {
        //         labels: data.map(item => item.CustomerName),
        //         datasets: [{
        //             label: 'Number of Alarms per customer',
        //             data: data.map(item => item.AlarmsCount),
        //             backgroundColor: [
        //                 'rgba(255, 99, 132, 0.2)',
        //                 'rgba(54, 162, 235, 0.2)',
        //                 'rgba(255, 206, 86, 0.2)',
        //                 'rgba(75, 192, 192, 0.2)',
        //                 'rgba(153, 102, 255, 0.2)',
        //                 'rgba(88, 247, 64, 0.2)',
        //                 // 'rgba(33, 159, 2, 0.2)',
        //                 // 'rgba(200, 45, 88, 0.2)',
        //                 // 'rgba(189, 22, 133, 0.2)',
        //                 // 'rgba(12, 133, 22, 0.2)'
        //             ],
        //             borderColor: [
        //                 'rgba(255, 99, 132, 1)',
        //                 'rgba(54, 162, 235, 1)',
        //                 'rgba(255, 206, 86, 1)',
        //                 'rgba(75, 192, 192, 1)',
        //                 'rgba(153, 102, 255, 1)',
        //                 'rgba(255, 159, 64, 1)'
        //             ],
        //             borderWidth: 1
        //         }]
        //     },
        //     options: {
        //         scales: {
        //             yAxes: [{
        //                 ticks: {
        //                     beginAtZero: true
        //                 }
        //             }]
        //         }
        //     }
        // });
    }
}