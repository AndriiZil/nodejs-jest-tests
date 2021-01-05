const { Router } = require('express');
const todoController = require('../controllers/todo.controller');

const router = Router();

router.post('/', todoController.createTodo);

router.get('/', todoController.getTodos);

router.get('/:todoId', todoController.getTodoById);

router.put('/:todoId', todoController.updateTodo);

router.delete('/:todoId', todoController.deleteTodo);

module.exports = router;
