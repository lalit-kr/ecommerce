const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute=require('./routes/stripe');
const cors = require("cors");

mongoose
  .connect("mongodb://localhost:27017/e-comm")
  .then(() => console.log("Connected to DATABASE"))
  .catch((err) => console.log(err));

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/product", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/order", orderRoute);
app.use("/api/checkout", stripeRoute);


app.listen(4000, () => {
  console.log("Server Running!");
});
