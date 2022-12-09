import {Router} from 'express'
import book from '../services/book.mjs'

const router = Router()

router.get('/', (request, response) => {
    try {

    response.render('market.html')
    } catch (e) {
        console.log(e)
    }
})

import * as ApiController from '../controllers/API/ApiController.mjs'

router.get('/api/market', ApiController.market)
router.post('/api/orders/buy', ApiController.makeOrder)
router.post('/api/orders/sell', ApiController.makeOrder)

router.get('/book', (request, response) => response.json(book))


export default router