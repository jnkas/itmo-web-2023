import {Car} from './class1.js'

export class Truck extends Car {
	constructor (f, load ) {
        super(f, 15)
        this.load = load || 0
    }
	
    toLoad (w) {
            let diff  = (this.load + w) - 4000
        this.load = (this.load + w) <= 4000 ? (this.load + w) : 4000
        return (this.load + w) > 4000 ? diff : 0
    }
}