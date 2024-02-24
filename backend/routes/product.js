import express from "express";

import { productController } from "../controller/index.js";

const productRouter = express.Router();

productRouter.post("/add", productController.addProduct);

export default productRouter;
