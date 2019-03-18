export default class HallOfShame {
    constructor() {
         
        this.data = fetch('data/task3data.json')
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })




    }
}