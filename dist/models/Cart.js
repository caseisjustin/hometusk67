"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/models/Cart.ts
const sequelize_1 = require("sequelize");
class Cart extends sequelize_1.Model {
    static initModel(sequelize) {
        Cart.init({
            id: {
                type: sequelize_1.DataTypes.UUIDV4,
                autoIncrement: true,
                primaryKey: true,
            },
            userId: {
                type: sequelize_1.DataTypes.UUIDV4,
                allowNull: false,
            },
            ticketId: {
                type: sequelize_1.DataTypes.UUIDV4,
                allowNull: false,
            },
            quantity: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
            },
        }, {
            tableName: 'carts',
            sequelize,
        });
    }
}
exports.default = Cart;
