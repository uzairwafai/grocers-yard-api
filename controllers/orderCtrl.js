const orderRepo = require("../repositories/orderRepo");
const productRepo = require("../repositories/productRepo");

const get = async (req, res) => {
  try {
    const page = req.params.page || 1;
    const size = req.params.size || 10;
    const data = await orderRepo.get(page, size);
    res.status(200).json({
      data: data,
    });
  } catch (err) {
    res.status(500).send("Internal server error");
  }
};
const add = async (req, res) => {
  try {
    req.body.userId = req.userId;
    const productId = req.body.products[0].productId;
    const quantity = req.body.products[0].quantity;
    const product = await productRepo.dataFetch(productId);
    if (!product) {
      res.status(404).send("Product not found");
    } else if (product.stock < quantity) {
      res.status(406).send("Insufficient quantity");
    } else {
      await orderRepo.add(req.body);
      console.log(req.body);
      product.stock = product.stock - quantity;
      console.log(product.stock);
      await productRepo.patch(productId, { stock: product.stock });
      res.status(200).json({ details: "Order Placed Successfully" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
};

module.exports = {
  get,
  add,
};
