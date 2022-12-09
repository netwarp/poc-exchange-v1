import {randomUUID} from 'crypto'

class Order {
    constructor(side, price, size, priority) {
        this.side = side
        this.price = price
        this.size = size
        this.sizeRemaining = size
        this.priority = priority
        this.valueRemoved  = 0
        this.id = randomUUID()
    }

    updateSizeAndValueRemoved(size) {

        console.log(this.id, this.side, 'before', this.size, this.sizeRemaining, this.valueRemoved)
        this.sizeRemaining -= size
        this.valueRemoved += size
        console.log(this.id, this.side, 'after', this.size, this.sizeRemaining, this.valueRemoved)
    }
}

export default Order