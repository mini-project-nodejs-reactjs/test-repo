const todoRoute = require("express").Router();
const { todoController } = require("../controllers");

todoRoute.get("/:boardId", todoController.getAllTodos);
todoRoute.post("/", todoController.createTodo);
// todoRoute.put("/:id", todoController.updateTodo);
// todoRoute.delete("/:id", todoController.deleteTodo);

module.exports = todoRoute;
