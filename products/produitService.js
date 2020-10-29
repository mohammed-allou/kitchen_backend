const db = require('../Database')

const ProductService = {
    getProducts: (callback) => {
        return db.query('SELECT * FROM products', callback)
    },
    createProduct: (product, callback) => {
        return db.query("INSERT INTO products (`name`, `quantity`, `unite`, `img`) VALUES (?, ?, ?, ?)", [product.name, product.quantity, product.unite, product.img], callback)
    },
    updateProduct: (id, product, callback) => {
        return db.query("UPDATE products SET `name` = ?, `quantity` = ?, `unite` = ?, `img` = ? where id = ?", [product.name, product.quantity, product.unite, product.img, id], callback)
    },
    deleteProduct: (id, callback) => {
        return db.query("DELETE FROM products where id = ?", [id], callback)
    }
}

module.exports = ProductService