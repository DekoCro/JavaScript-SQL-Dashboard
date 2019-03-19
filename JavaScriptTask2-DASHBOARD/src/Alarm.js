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
        let chart = document.querySelector('#chartTwo').getContext('2d');
        let alarmChart = new Chart(chart, {
            type: 'line',
            data: {
              labels: data.map(item => item.Date),
              datasets: [{
                label: "Alarms timeline",
                data: data.map(item => item.AlarmsCount),
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
              }]
            }
          });
    }
}