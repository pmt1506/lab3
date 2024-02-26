import express from "express";
import { commentController } from "../controller/index.js";

const commentRouter = express.Router();

commentRouter.post("/add/", commentController.createComment);


export default commentRouter;