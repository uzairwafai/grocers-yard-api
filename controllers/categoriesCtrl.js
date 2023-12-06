const categoriesRepo = require("../repositories/categoriesRepo");

const add = async (req, res) => {
  try {
    if (req.body.parentId && req.body.name.length >= 3) {
      await categoriesRepo.add(req.body);
      res.status(201).send("created");
    } else {
      res.status(401).send("category name must have more than 3 characters and parentId is required");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};
const get = async (req, res) => {
  try {
    const data = await categoriesRepo.get();
    res.status(200).json(data);
  } catch (err) {
    console.error(err)
    res.status(500).send("Internal Server Error");
  }
};
const remove = async (req, res) => {
  try {
    const id = req.params.id;
    await categoriesRepo.remove(id);
    res.status(204).send("Deleted succesfully");
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
};

const update = async (req, res) => {
  try {
    await categoriesRepo.update(req.params.id, req.body);
    res.status(200).send("updated");
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  add,
  get,
  remove,
  update,
};
