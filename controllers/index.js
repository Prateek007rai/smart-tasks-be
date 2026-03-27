const { FAILED_TO_CREATE_TASK, TASK_CREATED_SUCCESSFULLY, 
    FAILED_TO_FETCH_TASKS, TASKS_FETCHED_SUCCESSFULLY,
     TASK_DELETED_SUCCESSFULLY, FAILED_TO_DELETE_TASK, TASK_NOT_FOUND } = require("../helpers/response");
const taskService = require("../services/task");

//create task function
const createTaskController = async(req, res) => {
  try {
    const task = await taskService.createTask(req.body);
    return res.status(201).json({message: TASK_CREATED_SUCCESSFULLY, task});
  } catch (err) {
    console.log("Eror in task creation : ", err)
    res.status(500).json({
      message: FAILED_TO_CREATE_TASK,
    });
  }
};

//get all tasks function
const getAllTasksController = async(req, res) => {
    try{
        const tasks = await taskService.getTasks();
        return res.status(200).json({
            message: TASKS_FETCHED_SUCCESSFULLY,
            tasks,
        })

    }catch(err){
        console.log("Error in fetching tasks : ", err)
        res.status(500).json({
            message: FAILED_TO_FETCH_TASKS,
        })
    }
}

//delte all tasks
const deleteTaskById = async(req, res) => {
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
        console.log("Error during delete : ", err);
        res.status(500).json({
            message: FAILED_TO_DELETE_TASK,
        })
    }
}

//generate summary of tasks

module.exports = {
  createTaskController,
  getAllTasksController,
  deleteTaskById
};