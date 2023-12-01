const Order = require("../model/order");
const get = (page, size) => {
  const recorsToSkip = (page - 1) * size;
  return Order.find({}).skip(recorsToSkip).limit(size);
};
const add = (payload) => {
  const order = new Order(payload);
  return order.save();
};
const dataFetch = (productId) => {
    console.log(productId,typeof(productId));

  return Order.findById(productId);
};
module.exports = {
  get,
  add,
  dataFetch,
};
