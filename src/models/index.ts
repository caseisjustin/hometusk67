// src/models/index.ts
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
  dialect: 'postgres',
});

import User from './User';
import Ticket from './Ticket';
import Cart from './Cart';

// Initialize all models
User.initModel(sequelize);
Ticket.initModel(sequelize);
Cart.initModel(sequelize);

// Define associations
User.hasMany(Ticket, {
  sourceKey: 'id',
  foreignKey: 'userId',
  as: 'tickets',
});
Ticket.belongsTo(User, {
  targetKey: 'id',
  foreignKey: 'userId',
  as: 'user',
});

User.hasMany(Cart, {
  sourceKey: 'id',
  foreignKey: 'userId',
  as: 'carts',
});
Cart.belongsTo(User, {
  targetKey: 'id',
  foreignKey: 'userId',
  as: 'user',
});

Cart.belongsTo(Ticket, {
  targetKey: 'id',
  foreignKey: 'ticketId',
  as: 'ticket',
});

export { sequelize, User, Ticket, Cart };
