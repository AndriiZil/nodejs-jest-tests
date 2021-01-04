const { Router } = require('express');
const todoController = require('../controllers/todo.controller');
const router = Router();

router.post('/', todoController.createTodo);

module.exports = router;
