const Task = require("../../models/task.model");

module.exports.index = async (req, res) => {
  const find = {
    deleted: false,
  };

  if (req.query.status) {
    find.status = req.query.status;
  }

  //Sort
  const sort = {};
  if (req.query.sortKey && req.query.sortValue) {
    sort[req.query.sortKey] = req.query.sortValue;
  }
  //End sort

  const data = await Task.find(find).sort(sort);
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
