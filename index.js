const express = require("express");
const mongoose = require("mongoose");
const Product = require("./model/product.model.js");
const productRoute = require("./routes/products.route.js");
const app = express();

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const PORT = 3000;

//routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});

mongoose
  .connect("mongodb://127.0.0.1:27017")
  .then(() => {
    console.log("Connected to DB");
    app.listen(PORT, () => {
      console.log(`APP is Running on ${PORT}`);
    });
  })
  .catch(() => {
    console.log(" NOt Connected to DB");
  });
