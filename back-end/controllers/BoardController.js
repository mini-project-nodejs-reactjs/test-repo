const { board } = require("../models");
const { tokenVerifier } = require("../helpers/jsonwebtoken");

class BoardController {
  static async getAllBoards(req, res) {
    try {
      let userInfo = tokenVerifier(req.headers.access_token)
      let boards = await board.findAll({
        where: {
          userId: userInfo.id
        }
      });
      res.status(200).json(boards);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async createBoard(req, res) {
    try {
      let userInfo = tokenVerifier(req.headers.access_token)
      const { boardName, backgroundImg } = req.body;

      let result = await board.create({
        boardName,
        backgroundImg,
        userId: userInfo.id,
      });

      res.status(201).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = BoardController;
