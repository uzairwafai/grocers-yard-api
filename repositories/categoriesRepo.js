const Category = require("../model/categories");

const add = (payload) => {
  const category = new Category(payload);
  return category.save();
};

const get = () => {
  return Category.find({}, { __v: 0 }).populate("parentId");
};

const remove = (id) => {
  return Category.deleteOne({ _id: id });
};

const update = (id, payload) => {
  return Category.findByIdAndUpdate(id, payload);
};

const getById = (id) => {
  return Category.findOne({ _id: id });
};

const getBySearch = (search) => {
  const regexQuery = new RegExp(search, "i");
  return Category.findOne({ name: regexQuery });
};

module.exports = {
  add,
  get,
  remove,
  update,
  getById,
  getBySearch
};
