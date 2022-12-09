import express from 'express'
import bodyParser from 'body-parser'
import nunjucks from 'nunjucks'
import { createServer } from 'http'
import { Server } from 'socket.io'






const app = express()

const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ })

nunjucks.configure('views', {
    autoescape: true,
    express: app,
    watch: true
});

app.use(express.static('public'));
app.use(bodyParser.json())

import book from './services/book.mjs'

import router from './routes/routes.mjs'
app.use('/', router)

global.io = io

global.io.on('connection', (socket) => {
    socket.emit('serverServeMarket', book)
})




httpServer.listen(8080)