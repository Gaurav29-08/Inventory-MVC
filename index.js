import express from 'express'
import ProductController from './src/controllers/product.controller.js';
// const express = require('express');

import path from 'path';

const server = express();
server.set("view engine","ejs");
//tell them  the path
server.set("views",path.join(path.resolve(),'src','views'))


// create an instance of ProductController
const productController = new ProductController(); 
server.get('/', (productController.getProducts));
server.use(express.static('src/views'));
    // return res.send('Welcome to Inventory App');
server.listen(3400);
console.log('Server is listening on pert 3400');