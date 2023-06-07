const router = require("express").Router();
const product_controller = require("../controller/productController.js");
router.post("/", product_controller.add_product);
router.get("/", product_controller.product_all);
router.get("/:productId");
router.put("/:productId");
router.delete("/:productId");
module.exports = router;
