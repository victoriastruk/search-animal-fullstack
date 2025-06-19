'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PetTypes extends Model {
    static associate(models) {
      PetTypes.hasMany(models.Pet, { foreignKey: 'petTypeId' });
    }
  }
  PetTypes.init(
    {
      type: DataTypes.STRING(64),
    },
    {
      sequelize,
      modelName: 'PetTypes',
      underscored: true,
    }
  );
  return PetTypes;
};
