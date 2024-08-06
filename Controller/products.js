const Products = require("../model/productModel")

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
};

exports.postAddProduct = (req, res, next) => {
    res.redirect("/");
    const product = new Products(req.body.title);
    product.save();
  };
  
  exports.getProductPage = (req, res, next) => {
      Products.fetchAll(products => {
        res.render("shop", { prods: products, pageTitle: "Book List", path: "/" });
        console.log(products)
      });
  };
  

exports.PageNotFound = (req, res, next) => {
    res.status(404).render('404Page.pug' , { pageTitle : 'Page Not Found' })
}