const http = require("http");
const express = require("express");
const bodyParser = require('body-parser');
const adminRoute = require('./Routes/Admin');
const shopRouter = require('./Routes/shop');
const path = require('path');
const rootDir = require('./util/path');

const app = express();

const pageNotFoundController = require("./Controller/products") 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, "public")));

app.set("view engine", "pug");
app.set("views", "views");

app.use('/admin', adminRoute);
app.use(shopRouter);

app.use(pageNotFoundController.PageNotFound);

app.listen(3000);
