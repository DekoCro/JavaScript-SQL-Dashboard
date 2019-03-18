export default class Alarm {
    constructor() {
        fetch('data/task2data.json')
        .then(response => response.json())
        .then(data => {
            // console.log(data)
        })
    }
}