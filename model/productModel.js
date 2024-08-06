const products = [];
const fs = require("fs");
const path = require("path");

const rootDir = require("../util/path");

const p = path.join(rootDir, "data", "product.json");

module.exports = class Products {
  constructor(title) {
    this.title = title;
  }

  save() {
    fs.readFile(p, (error, filecontent) => {
      let product = [];
      if (!error) {
        product = JSON.parse(filecontent);
      }
      product.push(this);
      fs.writeFile(p, JSON.stringify(product), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(callback) {
    fs.readFile(p, (err, filecontent) => {
      if (err) {
        callback([]);
      }
      callback(JSON.parse(filecontent));
      console.log(JSON.parse(filecontent))
    });
  }
};
