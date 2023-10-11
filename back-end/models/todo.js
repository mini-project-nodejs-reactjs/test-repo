"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      todo.belongsTo(models.user);
      todo.belongsTo(models.board);
      todo.belongsTo(models.type);
    }
  }
  todo.init(
    {
      todoName: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      typeId: DataTypes.INTEGER,
      boardId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "todo",
    }
  );
  return todo;
};
