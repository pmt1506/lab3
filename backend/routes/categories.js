import express from "express";
import { categoriesController } from "../controller/index.js";

const categoriesRouter = express.Router();

categoriesRouter.get("/", categoriesController.getAllCategories);

categoriesRouter.post("/add", categoriesController.createCategory);

export default categoriesRouter;