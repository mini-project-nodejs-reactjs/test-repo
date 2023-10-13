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
            board.backgroundImg = 'https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?cs=srgb&dl=pexels-roberto-nickson-2486168.jpg&fm=jpg'
          }
        },
      },
      sequelize,
      modelName: "board",
    }
  );
  return board;
};
