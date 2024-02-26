import express from "express";
import { accountsController } from "../controller/index.js";

const accountRouter = express.Router();

accountRouter.post("/add", accountsController.createAccount);

export default accountRouter;