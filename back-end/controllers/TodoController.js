const { todo, user, type, board } = require("../models");
const { tokenVerifier } = require("../helpers/jsonwebtoken");

class TodoController {
  static async getAllTodos (req, res) {
    try {
      const boardData = await board.findByPk(req.params.boardId)
      const todos = await todo.findAll({
        where: {
          boardId: req.params.boardId
        }
      })
      res.status(200).json({ board: boardData, todos });
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async createTodo (req, res) {
    try {
      let userInfo = tokenVerifier(req.headers.access_token)
      const { todoName, typeId, boardId } = req.body
      const data = await todo.create({
        todoName,
        typeId,
        boardId,
        userId: userInfo.id
      })
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async deleteTodo(req, res) {
    try {
      const id = +req.params.id;
      let result = await todo.destroy({
        where: { id },
      });
      result === 1
        ? res.status(200).json({
            message: `todo Id ${id} deleted successfully!`,
          })
        : res.status(404).json({
            message: `todo Id ${id} not deleted successfully!`,
          });
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async updateTodo(req, res) {
    try {
      const id = +req.params.id;
      const { todoName, typeId } = req.body;
      let result = await todo.update(
        {
          todoName,
          typeId,
        },
        {
          where: { id },
        }
      );

      if (result[0] === 1) {
        res.status(201).json({
          message: `Todo Id ${id} updated successfully!`,
        });
      } else {
        res.status(404).json({
          message: `Todo Id ${id} not updated successfully!`,
        });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
  catch(error) {
    res.status(500).json(error);
  }
}

module.exports = TodoController;
