const express = require('express');
const path = require('path')
const adminData = require('../Routes/Admin')

const shopRouter = express.Router();

shopRouter.get('/',(req,res,next)=>{
    const product = adminData.products
    res.render('shop' , {prods : product , title : "Book List" })
})

module.exports = shopRouter;
