'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_ extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user_.init({
    Email: DataTypes.STRING,
    Username: DataTypes.STRING,
    Password: DataTypes.STRING,
    Total_score: DataTypes.STRING,
    Bio: DataTypes.STRING,
    City: DataTypes.STRING,
    social_media_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user_',
  });
  return user_;
};