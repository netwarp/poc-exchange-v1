import Order from './Order.mjs'

class Book {
    buy = []
    sell = []
    history = []
    price = 0
    volume = 0

    constructor() {

    }

    add(order) {
        this[order.side].push(order)
        this.sort()
        this.trade(order)
    }

    sort() {
        const sortBuy = (a, b) => a.price - b.price || b.priority - a.priority
        const sortSell = (a, b) => a.price - b.price || a.priority - b.priority

        this.buy.sort(sortBuy)
        this.sell.sort(sortSell)
    }

    spread() {
        const higherBuy = this.buy.at(-1)?.price
        const lowerSell = this.sell.at(0)?.price

        return lowerSell - higherBuy || null
    }

    trade(takerOrder) {
        const takerOrderSide = takerOrder.side
        const takerOrderPrice = takerOrder.price

        if (takerOrderSide === 'buy') {
            let i = 0
            while (this.sell[i]?.price <= takerOrderPrice && takerOrder.sizeRemaining > 0) {
                const makerOrder = this.sell.at(i)

                this.makeTrade(takerOrder, makerOrder)
                if (takerOrder.sizeRemaining == 0) {
                    break
                }

                i++
            }
        } else if (takerOrderSide === 'sell') {
            let i = -1
            while (this.buy.at(i)?.price >= takerOrderPrice && takerOrder.sizeRemaining > 0) {
                const makerOrder = this.buy.at(i)

                this.makeTrade(takerOrder, makerOrder)
                if (takerOrder.sizeRemaining === 0) {
                    break
                }

                i--
            }
        }

        this.buy = this.buy.filter(order => order.sizeRemaining > 0)
        this.sell =this.sell.filter(order => order.sizeRemaining > 0)

        if (this.history.length > 100) {
            this.history.pop()
        }
    }


    makeTrade(takerOrder, makerOrder) {
        const min = Math.min(takerOrder.sizeRemaining, makerOrder.sizeRemaining)

        const message = takerOrder.sizeRemaining > makerOrder.sizeRemaining ? 'taker greater' : 'maker greater'
        console.log(message)

        takerOrder.updateSizeAndValueRemoved(min)
        makerOrder.updateSizeAndValueRemoved(min)

        this.history.unshift({
            side: takerOrder.side,
            price: takerOrder.price,
            size: min,
            priority: takerOrder.priority
        })

        this.price = makerOrder.price
        this.volume += min

        if (this.history.length > 30) {
            this.history.pop()
        }
    }



}

export default Book