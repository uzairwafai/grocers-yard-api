const orderRepo = require("../repositories/orderRepo");

const get = async (req, res) => {
  const page = req.params.page || 1;
  const size = req.params.size || 10;
  const data = await orderRepo.get(page, size);
  res.status(200).json({
    data: data,
  });
};
const add = async (req, res) => {
  await orderRepo.add(req.body);
  res.status(200).json({ details: "Order Placed Successfully" });
};

module.exports = {
  get,
  add
};
