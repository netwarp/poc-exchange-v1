import Order from '../../core/Order.mjs'
import book from '../../services/book.mjs'
import db from '../../services/surrealdb.mjs'
import order from "../../core/Order.mjs";

export async function market(request, response) {
    const orders = await db.select('orders')

    let buy = orders.filter(order => order.side === 'buy')
    let sell = orders.filter(order => order.side === 'sell')

    let buy_grouped = {}

    response.json({
        buy,
        sell
    })
    //response.json(book)
}

export async function makeOrder(request, response) {

    // TODO secure keys, price, size, integer or float
    let side = request.path
    side = side.split('/')
    side = side.at(-1)

    const price = request.body.price
    const size = request.body.size

    const priority = (new Date()).getTime()

    const order = new Order(side, price, size, priority)
    book.add(order)

    global.io.emit('serverServeMarket', book)

    await db.create('orders', {
        id: order.id,
        side,
        price,
        size,
        priority
    })


    response.json(order)
}