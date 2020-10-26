const db = require('../Database')

const ProductService = {
    getProducts: (callback) => {
        return db.query('SELECT * FROM products', callback)
    },
    createProduct: (product, callback) => {
        return db.query("INSERT INTO products (`name`, `quantity`, `unite`, `img`) VALUES (?, ?, ?, ?)", [product.name, product.quantity, product.unite, product.img], callback)
    }
}

module.exports = ProductService