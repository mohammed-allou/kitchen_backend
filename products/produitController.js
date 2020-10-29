const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
const ProductService = require('./produitService');

router.get('/', function (req, res) {
    ProductService.getProducts(function (err, rows) {
        if (err) {
            res.status(400).json(err);
        }
        else {
            res.json(rows);
        }
    });
});

router.post('/', function (req, res) {
    ProductService.createProduct(req.body, function (err, count) {
        if (err) {
            res.status(400).json(err);
        }
        else {
            res.status(201).json();
        }
    });
});

router.put('/:id', function (req, res) {
    ProductService.updateProduct(req.params.id, req.body, function (err, count) {
        if (err) {
            res.status(400).json(err);
        }
        else {
            res.status(200).json();
        }
    });
});

router.delete('/:id', function (req, res) {
    ProductService.deleteProduct(req.params.id, function (err, count) {
        if (err) {
            res.status(400).json(err);
        }
        else {
            res.status(204).json();
        }
    });
});

module.exports = router;