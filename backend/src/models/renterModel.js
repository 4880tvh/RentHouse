'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Renter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Renter.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    gender: DataTypes.BOOLEAN,
    dob: DataTypes.DATE,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    citizenId: DataTypes.STRING,
    university: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Renter',
  });
  return Renter;
};