const Category = require("../model/categories");

const add = (payload) => {
  const category = new Category(payload);
  return category.save();
};

const get = () => {
  return Category.find({}, { __v: 0 }).populate('productId');
};

const remove = (id) => {
  return Category.deleteOne({ _id: id });
};
const update = (id, payload) => {
  return Category.findByIdAndUpdate(id,payload);
};
module.exports = {
  add,
  get,
  remove,
  update
};
