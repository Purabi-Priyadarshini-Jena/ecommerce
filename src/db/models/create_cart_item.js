'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class create_cart_item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  create_cart_item.init({
    cartId: { type: DataTypes.INTEGER, allowNull: false },
    productId: { type: DataTypes.INTEGER, allowNull: false },
    quantity: { type: DataTypes.INTEGER, allowNull: false, validate: { min: 1 }, defaultValue: 1, },
    price: { type: DataTypes.DECIMAL, allowNull: false, validate: { min: 0 } }
  }, {
    sequelize,
    modelName: 'create_cart_item',
  });
  return create_cart_item;
};