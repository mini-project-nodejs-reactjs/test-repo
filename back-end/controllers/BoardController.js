const { board, user } = require("../models");

class BoardController {
  static async getAllBoards(req, res) {
    try {
      let boards = await board.findAll({
        include: [user],
      });
      res.status(200).json(boards);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async createBoard(req, res) {
    try {
      const { boardName, backgroundImg, userId } = req.body;

      let result = await board.create({
        boardName,
        backgroundImg,
        userId,
      });

      res.status(201).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = BoardController;
