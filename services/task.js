const Task = require("../models/task");

const createTask = async (data) => {
  return await Task.create(data);
};

module.exports = {
  createTask,
};