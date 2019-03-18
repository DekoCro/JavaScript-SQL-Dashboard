export default class Customer {
    constructor() {
        fetch('data/task1data.json')
        .then(response => response.json())
        .then(data => {
            // console.log(data)
        })
    }
}