const app = require("@forkjs/group-router");

const { getAllProductsStatic,getAllProducts } = require("../controllers/productController");

app.group("/api/products", () => {
  app.post("/select-static", getAllProductsStatic);
  app.post("/select-all", getAllProducts);
});


module.exports = app.router;