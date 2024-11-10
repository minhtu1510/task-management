const Task = require("../../models/task.model");

module.exports.index = async (req, res) => {
  const data = await Task.find({
    deleted: false,
  });
  res.json(data);
};

module.exports.detail = async (req, res) => {
  const id = req.params.id;

  const data = await Task.findOne({
    _id: id,
    deleted: false,
  });
  res.json(data);
};
