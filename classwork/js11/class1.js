import {Truck} from './_Truck.js'

export default class Car {
	constructor (f, consumption, name) {
        this.fuel = f
        this.name = name
        this.consumption = (consumption/100)
        console.log('Машина создана. Бак заправлен на ' + this.fuel)
    }

    reFuel (q) {
        let diff  = (this.fuel + q) - 100
        this.fuel = (this.fuel + q) <= 100 ? (this.fuel + q) : 100
        return (this.fuel + q) > 100 ? diff : 0
    }

    go (distance) {
        this.fuel -= distance * this.consumption
        if (this.fuel < 0) this.fuel = 0
    }

    getFuelLevel () {
        return this.fuel
    }

    render () {
        document.querySelector('body').innerHTML = `
            <div> Машина ${this.name} </div>
        `
    }

}




let renoLogan = new Car(71, 'reno Logan')

let mercedesBenz  = new Car(71, 15)
mercedesBenz.go(199)
mercedesBenz.getFuelLevel()



let kamaz = new Truck (71, 3500)
let kamaz2 = new Truck (55, 0)