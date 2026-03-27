const { FAILED_TO_CREATE_TASK, TASK_CREATED_SUCCESSFULLY, 
    FAILED_TO_FETCH_TASKS, TASKS_FETCHED_SUCCESSFULLY,
     TASK_DELETED_SUCCESSFULLY, FAILED_TO_DELETE_TASK, TASK_NOT_FOUND,
     FAILED_TO_GENERATE_TASK_SUMMARY, TASK_SUMMARY_GENERATED_SUCCESSFULLY } = require("../helpers/response");
const taskService = require("../services/task");
const aiService = require("../services/aiService");

//create task function
const createTaskController = async(req, res, next) => {
  try {
    const task = await taskService.createTask(req.body);
    return res.status(201).json({message: TASK_CREATED_SUCCESSFULLY, task});
  } catch (err) {
      next(err);
  }
};

//get all tasks function
const getAllTasksController = async(req, res, next) => {
    try{
        const tasks = await taskService.getTasks();
        return res.status(200).json({
            message: TASKS_FETCHED_SUCCESSFULLY,
            tasks,
        })

    }catch(err){
        next(err);
    }
}

//delte all tasks
const deleteTaskById = async(req, res, next) => {
    try{
        const {id} = req.params;
        const task = await taskService.deleteTask(id);

        if(!task){
            return res.status(404).json({
                message: TASK_NOT_FOUND,
            })
        }
        return res.status(200).json({
            message: TASK_DELETED_SUCCESSFULLY,
            task,
        })

    }catch(err){
        next(err);
    }
}

//generate summary of task
const generateTaskSummary = async(req, res, next) => {
    try{
        const {id} = req.params;
        const task = await taskService.getTaskById(id);

        if(!task){
            return res.status(404).json({
                message: TASK_NOT_FOUND,
            })
        }
        //generate summary and save in task
        const summary = await aiService.generateSummary(task.title);
        task.generatedSummary = summary;
        await task.save();

        return res.status(200).json({
            message: TASK_SUMMARY_GENERATED_SUCCESSFULLY,
            task,
        })

    }catch(err){
        next(err);
    }
}


module.exports = {
  createTaskController,
  getAllTasksController,
  deleteTaskById,
  generateTaskSummary,
};