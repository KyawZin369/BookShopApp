const http = require("http");
const express = require("express");
const bodyParser = require('body-parser');
const adminData = require('./Routes/Admin');
const shopRouter = require('./Routes/shop');
const path = require('path');
const rootDir = require('./util/path');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, "public")));

app.set("view engine", "pug");
app.set("views", "views");

app.use('/admin', adminData.routes);
app.use(shopRouter);

app.use((req, res, next) => {
    res.status(404).render('404Page.pug')
});

app.listen(3000);
