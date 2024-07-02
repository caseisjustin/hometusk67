import express from 'express';
import dotenv from 'dotenv';
import sequelize from './database';
import userRoutes from './routes/users';
import ticketRoutes from './routes/tickets';
import cartRoutes from './routes/carts';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use('/users', userRoutes);
app.use('/tickets', ticketRoutes);
app.use('/carts', cartRoutes);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((error) => {
  console.error('Unable to connect to the database:', error);
});
