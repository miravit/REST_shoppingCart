require("dotenv").config();
require("express-async-errors");
const express = require("express");
const mongoose = require("mongoose");
const cartRoutes = require("./routes/cartRoutes");
const productRoutes = require("./routes/productRoutes");
const path = require("path");
const { json } = require("express");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(`processing ${req.method} request to ${req.path}`);
  console.log(req.path);
  next();
});

app.use("/api/v1/cart", cartRoutes);
app.use("/api/v1/product", productRoutes);

app.use((req, res) => {
  const isApiPath = req.path.startsWith("/api/");

  if (isApiPath) return res.sendStatus(404);

  return res.sendFile(path.join(__dirname, "./views/notFound.html"));
});

app.use((error, req, res, next) => {
  return res.json(error.message);
});

const port = process.env.PORT || 5000;
async function run() {
  try {
    mongoose.set("strictQuery", false);
    const conn = await mongoose.connect(process.env.MONGODB_URI);

    app.listen(port, () => {
      console.log(`server running on http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

run();
