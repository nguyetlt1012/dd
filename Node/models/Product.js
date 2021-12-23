const mongoose= require("mongoose");
const { boolean } = require("webidl-conversions");

const productSchema= new mongoose.Schema(
    {
        title: {type:String, required: true },
        desc: {type:String, required: true },
        img: {type: String, required: true},
        categories: {type: Array},
        size: {type: String },
        color: {type: String },
        price: {type: Number, required: true },
    }
);
module.exports = mongoose.model("Product", productSchema);