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
            element.innerHTML += "<td class='customerId'>" + data[r].CustomerId + "</td><td class='customerName'>" + data[r].CustomerName + "</td><td class='deviceName'>" + data[r].DeviceTypeName + "</td><td class='number'>" + data[r].DevicesCount + "</td>";
            element.innerHTML += "</tr>"
        }
    }
}