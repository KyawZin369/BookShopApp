const express = require('express');
const adminRoute = express.Router();
const path = require('path');
const rootDir = require('../util/path')

const products = [];

adminRoute.get('/add-product',(req,res,next)=>{
    res.render('add-product' , { pageTitle : 'Add Product' , path : '/admin/add-product'})
})

adminRoute.post('/product',(req,res,next)=>{
    res.redirect('/')
    products.push(req.body.title)
})

exports.routes = adminRoute;
exports.products = products;