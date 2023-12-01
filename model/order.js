const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  id: Number,
  userId:String,
  products: [{ productId: String, quantity: Number }],
  totalAmount: Number,
  status: {
    type: String,
    enum: ["success", "failure"],
  },
});

module.exports = new mongoose.model("orders", schema);
