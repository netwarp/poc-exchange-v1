import express from 'express'
import nunjucks from 'nunjucks'

const app = express()

nunjucks.configure('views', {
    autoescape: true,
    express: app,
    watch: true
});

app.use(express.static('public'));

app.get('/', (request, response) => {
    response.render('market.html')
})

app.listen(8080)