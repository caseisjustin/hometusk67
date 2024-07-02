"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/models/Ticket.ts
const sequelize_1 = require("sequelize");
class Ticket extends sequelize_1.Model {
    static initModel(sequelize) {
        Ticket.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true,
            },
            title: {
                type: new sequelize_1.DataTypes.STRING(128),
                allowNull: false,
            },
            description: {
                type: new sequelize_1.DataTypes.STRING(128),
                allowNull: false,
            },
            price: {
                type: sequelize_1.DataTypes.FLOAT,
                allowNull: false,
            },
            userId: {
                type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
            },
        }, {
            tableName: 'tickets',
            sequelize,
        });
    }
}
exports.default = Ticket;
