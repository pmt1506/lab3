import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import connectDB from "./database.js";
import { categoriesRouter, productRouter } from "./routes/index.js";

const app = express();
dotenv.config();

// Set up CORS headers
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Increase the payload size limit to 50 megabytes
app.use(express.json({ limit: "50mb" }));
app.use(cors());

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("welcome kkk");
});

app.use(`/categories`, categoriesRouter);

app.use("/products", productRouter);

app.listen(PORT, async () => {
  connectDB();
  console.log(`Server is running on port ${PORT} `);
});
