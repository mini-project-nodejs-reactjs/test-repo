const { user } = require("../models");
const { decryptPwd } = require("../helpers/bcrypt");
const { tokenGenerator, tokenVerifier } = require("../helpers/jsonwebtoken");

class UserController {
  static async getAllUsers(req, res) {
    try {
      let users = await user.findAll();

      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async register(req, res) {
    try {
      const { email, password } = req.body;

      let result = await user.create({
        email,
        password,
      });

      res.status(201).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;

      let emailFound = await user.findOne({
        where: {
          email,
        },
      });

      if (emailFound) {
        if (decryptPwd(password, emailFound.password)) {
          let access_token = tokenGenerator(emailFound);
          res.status(200).json({ access_token, userInfo: {
            id: emailFound.id,
            email: emailFound.email,
          } });

          let verifyToken = tokenVerifier(access_token);
          console.log(verifyToken);
        } else {
          res.status(403).json({
            message: `Invalid Password`,
          });
        }
      } else {
        res.status(404).json({
          message: "User not found!",
        });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async update(req, res) {
    try {
      const id = +req.params.id;
      const { email, password } = req.body;
      let result = await user.update(
        {
          email,
          password,
        },
        {
          where: { id },
        }
      );

      if (result[0] === 1) {
        es.status(201).json({
          message: `User Id ${id} updated successfully!`,
        });
      } else {
        res.status(404).json({
          message: `User Id ${id} not updated successfully!`,
        });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async delete(req, res) {
    try {
      const id = +req.params.id;
      let result = await user.destroy({
        where: { id },
      });

      result === 1
        ? res.status(200).json({
            message: `User Id ${id} deleted successfully!`,
          })
        : res.status(404).json({
            message: `User Id ${id} not deleted successfully!`,
          });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = UserController;
