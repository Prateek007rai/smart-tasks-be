const { FAILED_TO_CREATE_TASK, TASK_CREATED_SUCCESSFULLY } = require("../helpers/response");
const taskService = require("../services/task");

//create task function
const createTaskController = async (req, res) => {
  try {
    const task = await taskService.createTask(req.body);
    res.status(201).json({message: TASK_CREATED_SUCCESSFULLY, task});
  } catch (error) {
    res.status(500).json({
      message: FAILED_TO_CREATE_TASK,
    });
  }
};

//get all tasks function


//delte all tasks

//update task by id

//generate summary of tasks

module.exports = {
  createTaskController,
};