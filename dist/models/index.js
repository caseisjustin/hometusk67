"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = exports.Ticket = exports.User = exports.sequelize = void 0;
// src/models/index.ts
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const sequelize = new sequelize_1.Sequelize({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
    dialect: 'postgres',
});
exports.sequelize = sequelize;
const User_1 = __importDefault(require("./User"));
exports.User = User_1.default;
const Ticket_1 = __importDefault(require("./Ticket"));
exports.Ticket = Ticket_1.default;
const Cart_1 = __importDefault(require("./Cart"));
exports.Cart = Cart_1.default;
// Initialize all models
User_1.default.initModel(sequelize);
Ticket_1.default.initModel(sequelize);
Cart_1.default.initModel(sequelize);
// Define associations
User_1.default.hasMany(Ticket_1.default, {
    sourceKey: 'id',
    foreignKey: 'userId',
    as: 'tickets',
});
Ticket_1.default.belongsTo(User_1.default, {
    targetKey: 'id',
    foreignKey: 'userId',
    as: 'user',
});
User_1.default.hasMany(Cart_1.default, {
    sourceKey: 'id',
    foreignKey: 'userId',
    as: 'carts',
});
Cart_1.default.belongsTo(User_1.default, {
    targetKey: 'id',
    foreignKey: 'userId',
    as: 'user',
});
Cart_1.default.belongsTo(Ticket_1.default, {
    targetKey: 'id',
    foreignKey: 'ticketId',
    as: 'ticket',
});
