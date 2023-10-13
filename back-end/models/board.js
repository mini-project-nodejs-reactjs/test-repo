"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class board extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      board.hasMany(models.todo);
      board.belongsTo(models.user);
    }
  }
  board.init(
    {
      boardName: DataTypes.STRING,
      backgroundImg: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      hooks: {
        beforeCreate: function (board, options) {
          if (!board.backgroundImg) {
            board.backgroundImg = 'https://9to5google.com/wp-content/uploads/sites/4/2017/02/chromeos_newdefaultwall_1-e1487111985183.png?w=1024'
          }
        },
      },
      sequelize,
      modelName: "board",
    }
  );
  return board;
};
