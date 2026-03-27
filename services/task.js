const Task = require("../models/task");

const createTask = async (data) => {
  return await Task.create(data);
};

const getTasks = async () => {
  return await Task.find().sort({ createdAt: -1 });
};

const deleteTask = async (id) => {
  return await Task.findByIdAndDelete(id);
};

module.exports = {
  createTask,
  getTasks,
  deleteTask,
};