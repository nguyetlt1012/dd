const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dontenv = require("dotenv");
const userRoute = require("../Node/routes/user");
const authRoute = require("../Node/routes/auth");
const productRoute = require("../Node/routes/product");
const cartRoute = require("../Node/routes/cart");
const orderRoute = require("../Node/routes/order");


dontenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connection sucessfull!"))
  .catch((erro) => console.log(erro));

app.use(express.json())
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running");
});
