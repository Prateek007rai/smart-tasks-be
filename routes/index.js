const express = require("express");
const validateTask = require("../middlewares/validate");
const { createTaskController, getAllTasksController, deleteTaskById, generateTaskSummary } = require("../controllers");
const router = express.Router();

router.post('/create-task', validateTask, createTaskController)
router.get('/all-tasks', getAllTasksController)
router.delete('/delete-task/:id', deleteTaskById)
router.get('/task-summary/:id', generateTaskSummary)

module.exports = router;