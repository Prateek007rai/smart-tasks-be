const express = require("express");
const validateTask = require("../middlewares/validate");
const { createTaskController } = require("../controllers");
const router = express.Router();

router.post('/create-task', validateTask, createTaskController)

module.exports = router;