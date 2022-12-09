class Queue {
    queue = []

    constructor() {

    }

    add(order) {
        this.queue.push(order)

        this.sort()
    }

    sort() {
        this.queue.sort((a, b) => {
            return a.price - b.price || a.priority - b.priority
        })
    }

    book(price, size) {
        let i = 0
        let sizeRemaining = size

        while (this.queue[i].price <= price && sizeRemaining > 0) {
            const order = this.queue[i]

            const rest = order.sizeRemaining - sizeRemaining

            order.sizeRemaining = rest > 0 ? rest : 0

            sizeRemaining = Math.abs(rest)

            if (rest > 0) {
                break
            }

            i++
        }
    }
}

export default Queue