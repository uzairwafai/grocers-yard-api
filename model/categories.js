const mongoose = require("mongoose");
const schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  parentId: {
    type: String,
    required: true,
    default: "parent category",
  },
  productId: [
    {
      type: String,
      ref: "products",
    },
  ],
});

module.exports = new mongoose.model("categories", schema);
