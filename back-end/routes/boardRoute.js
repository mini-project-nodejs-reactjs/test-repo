const boardRoute = require("express").Router();
const { boardController } = require("../controllers");

boardRoute.get("/", boardController.getAllBoards);
boardRoute.post("/", boardController.createBoard);

module.exports = boardRoute
