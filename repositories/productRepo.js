const { regexpToText } = require("nodemon/lib/utils");
const Product = require("../model/product");
const Categorgy = require("../model/categories");

const count = (search) => {
  const filter = {
    $or: [
      { name: new RegExp(search, "i") },
      { category: new RegExp(search, "i") },
    ],
  };
  return Product.countDocuments(filter);
};

const add = (payload) => {
  const product = new Product(payload);
  return product.save();
};

const get = (page, size, search) => {
  const recordstoSkip = (page - 1) * size;

  const filter = {
    $or: [
      { name: new RegExp(search, "i") },
      { category: { $in: Categorgy.find({ name: search }) } },
    ],
  };

  return Product.find(filter, { __v: 0 })
    .skip(recordstoSkip)
    .limit(size)
    .populate("category");
};

// const aggregateGet=(search)=>{
// Product.aggregate(
//   [
//     {

//       $match:{$or:[{name:{$regex:new RegExp(search,'i')}}]
//   },

//   {$lookup:{
//     from:'categories',
//     localField:'category',
//     foreignField:'_id',
//     as:'populatedCategory'
//   }
// }}]
// )

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

const patch = (id, payload) => {
  return Product.findByIdAndUpdate(id, payload);
};

const getBySearch = (search) => {
  const regexQuery = new RegExp(search, "i");
  return Product.find({ name: regexQuery});
};
const getByCategoryId = (catId) => {
  return Product.find({ category: catId }).populate('category');
};
module.exports = {
  add,
  get,
  getById,
  count,
  remove,
  updateAll,
  patch,
  getBySearch,
  getByCategoryId,
};
