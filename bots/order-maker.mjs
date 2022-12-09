import {randomInt} from 'crypto'

setInterval(async () => {

    const bool = ! Math.round(Math.random())
    const side = bool ? 'buy' : 'sell'
    let price
    const size = randomInt(1, 5)

    if (side === 'buy') {
        price = randomInt(1, 5)
    } else {
        price = randomInt(1, 5)
    }

    const baseUrl = 'http://localhost:8080/api/orders'
    const completeUrl = `${baseUrl}/${side}`

    console.log(completeUrl, price, size)

    try {
        const response = await fetch(completeUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                price,
                size
            })
        })
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }

}, 100)


