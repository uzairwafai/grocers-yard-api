const Product = require('../model/product');

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
const count = () => {
    return Product.count();
}

module.exports = {
    add,
    get,
    getById,
    count
}