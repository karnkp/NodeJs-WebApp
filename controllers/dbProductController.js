//const { response } = require('express');
const Product = require('../models/dbProductModel');

exports.getProducts = (request, response) => {
    if (request.params.dbMethod == 'showByID'){
        var pid = request.query.ProductID;
        Product.showProductByID (pid, (error, result) => {
            if (error) return response.status(500).sent(error);
            if (result.lenght == 0) return response.status(404).send("Product not Found");
            response.status(200).json(result[0]);
        });
    }else if (request.params.dbMethod == 'showAll'){
        Product.showAllProducts ( (error, results) => {
            if (error) return response.status(500).sent(error);
            response.render('productResult', {productList: results})
        });
    }
}