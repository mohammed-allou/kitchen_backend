const express = require('express')

const app = express()

const myRouter = express.Router()
myRouter.route('/products')
    .get((req, res) => {
        res.json([
            {
                "id": "1",
                "name": "Farine",
                "quantity": 1.5,
                "unit": "Kg",
                "img": "/image.jpg"
            },
            {
                "id": "2",
                "name": "Produit 2",
                "quantity": 1,
                "unit": "L",
                "img": "/image.jpg"
            },
            {
                "id": "3",
                "name": "Produit 3",
                "quantity": 0,
                "unit": "Kg",
                "img": "/image.jpg"
            }
        ])
    })

app.use(myRouter)

app.listen(9090, function () {
    console.log('listen in port 9090  ! ')})