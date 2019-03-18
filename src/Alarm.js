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
            element.innerHTML += "<td class='column1'>" + data[r].Date + "</td><td class='column2'>" + data[r].AlarmType + "</td><td class='column3'>" + data[r].AlarmsCount + "</td>";
            element.innerHTML += "</tr>"
        }
    }
}