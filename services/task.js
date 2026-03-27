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

const getTaskById = async(id) => {
  return await Task.findById(id);
}

module.exports = {
  createTask,
  getTasks,
  deleteTask,
  getTaskById,
};