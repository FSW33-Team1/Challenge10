'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  game.init({
    name: DataTypes.STRING,
    Description: DataTypes.STRING,
    thumbnail_url: DataTypes.STRING,
    Game_url: DataTypes.STRING,
    play_count: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'game',
  });
  return game;
};