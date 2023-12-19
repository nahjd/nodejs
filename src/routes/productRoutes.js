const router = require("express").Router();
const productsControllers = require("./../controllers/productControllers");

router.get("/products", productsControllers.getAllProduct);

module.exports = router;
