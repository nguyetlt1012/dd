const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dontenv=require("dotenv")

dontenv.config();

mongoose
  .connect(
    process.env.MONGO_URL
  )
  .then(() => console.log("DB connection sucessfull!"))
  .catch((erro) => console.log(erro));

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running");
});
