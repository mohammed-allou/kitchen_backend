const express = require("express");
const request = require("supertest");
const produitController = require('./produitController')
const app = express()
const ProductService = require('./produitService')
app.use('/', produitController)

describe('CRUD DATABASE', () => {

    ProductService.getProducts = jest.fn((callback) => {
        return callback(undefined, [{ "id": "1111", "name": "pomme" }])
    });
    it("GET / - success", async () => {
        const res = await request(app).get("/");
        expect(res.status).toBe(200);
        expect(ProductService.getProducts).toHaveBeenCalledTimes(1);
    });

    ProductService.createProduct = jest.fn((product, callback) => {
        if (product.name == "john") {
            callback(undefined, {});
        }
        else {
            callback(Error("errror"), undefined);
        }
    });
    it("POST / - success", async () => {
        const res = await request(app).post("/").send({
            name: 'john',
            quantity: 88,
            unite: "Kg",
            img: "/image.jpg"
        }).set('Accept', 'application/json')
        expect(res.status).toBe(201);
        expect(ProductService.createProduct).toHaveBeenCalledTimes(1);
    });

    ProductService.updateProduct = jest.fn((id, product, callback) => {
        if (product.name == "john") {
            callback(undefined, {});
        }
        else {
            callback(Error("errror"), undefined);
        }
    });
    it("PUT /:id - success", async () => {
        const res = await request(app)
            .put('/1')
            .send({
                name: 'john',
                quantity: 2,
                unite: "Kg",
                img: "/image.jpg"
            })
            .set('Accept', 'application/json')
        console.log(res.body);
        expect(res.status).toBe(200);
    });

    ProductService.deleteProduct = jest.fn((id, callback) => {
        if (id == "76") {
            callback(undefined, {});
        }
        else {
            callback(Error("errror"), undefined);
        }
    });
    it("DELETE /:id - success", async () => {
        const res = await request(app).delete('/76');
        expect(res.status).toBe(204);
    });

    it("DELETE /:id - produit not found", async () => {
        const res = await request(app).delete('/100');
        expect(res.status).toBe(400);
    });
})
