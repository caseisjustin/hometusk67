// src/models/Cart.ts
import { Model, DataTypes, Sequelize } from 'sequelize';

class Cart extends Model {
  public id!: number;
  public userId!: number;
  public ticketId!: number;
  public quantity!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  static initModel(sequelize: Sequelize) {
    Cart.init({
      id: {
        type: DataTypes.UUIDV4,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.UUIDV4,
        allowNull: false,
      },
      ticketId: {
        type: DataTypes.UUIDV4,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    }, {
      tableName: 'carts',
      sequelize,
    });
  }
}

export default Cart;
