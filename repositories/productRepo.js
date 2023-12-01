const Product = require("../model/product");

const count = () => {
 
  return Product.countDocuments();
};

const add = (payload) => {
  const product = new Product(payload);
  return product.save();
};

const get = (page, size, pageSize) => {
  const recordstoSkip = (page - 1) * size;
  return Product.find({}, { __v: 0 }).skip(recordstoSkip).limit(size);
};

const getById = (id) => {
  return Product.findById(id, { __v: 0 });
};

const remove = (id) => {
  return Product.deleteOne({ _id: id });
};

const updateAll = (id, payload) => {
  console.log(payload);
  return Product.updateOne({ _id: id }, payload);
  //Product.findByIdAndUpdate(id, payload);
};
const dataFetch = (productId) => {
  return Product.findById(productId);
  
};
module.exports = {
  add,
  get,
  getById,
  count,
  remove,
  updateAll,
  dataFetch
};
