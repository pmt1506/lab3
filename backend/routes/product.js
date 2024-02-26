import express from "express";
import { productController } from "../controller/index.js";

const productRouter = express.Router();

productRouter.get("/", productController.getAllProducts);

productRouter.post("/add", productController.addProduct);

productRouter.get("/:id", productController.getProductDetail);

export default productRouter;
