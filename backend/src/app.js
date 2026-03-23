import express from "express";
import cors from "cors";
import path from "path";
import productRoutes from "./routes/product.routes.js";

const app = express();

app.use(cors());
app.use(express.static("../frontend"));
app.use(express.json());
app.use("/api/products", productRoutes);

// Catch-all handler for frontend routes (Express 5 compatible)
app.use((req, res) => {
  res.sendFile(path.resolve("../frontend/index.html"));
});

export default app;

