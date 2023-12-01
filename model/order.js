const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  id: Number,
  userId:String,
  products: [{ productId: String, stock: Number }],
  quantity:Number,
  totalAmount: Number,
  status: {
    type: String,
    enum: ["Success", "Failure"],
  },
});

module.exports = new mongoose.model("orders", schema);
