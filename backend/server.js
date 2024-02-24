import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import connectDB from "./database.js";
import { categoriesRouter } from "./routes/index.js";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT;

app.get("/", (res, req) => {
  res.send("welcome kkk");
});

app.use(`/categories`, categoriesRouter);

app.listen(PORT, async () => {
  connectDB();
  console.log(`Server is running on port ${PORT} `);
});
