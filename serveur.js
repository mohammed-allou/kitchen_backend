const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const produitController = require('./products/produitController');
app.use('/products', produitController);

const port = process.env.PORT || 9090;

app.listen(port, function () {
    console.log('Express server listening on port ' + port);
});