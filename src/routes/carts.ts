import { Router } from 'express';
import Cart from '../models/Cart';

const router = Router();

router.post('/', async (req, res) => {
  const { userId, ticketId, quantity } = req.body;
  const cart = await Cart.create({ userId, ticketId, quantity });
  res.json(cart);
});

router.get('/', async (req, res) => {
  const carts = await Cart.findAll();
  res.json(carts);
});

router.get('/:id', async (req, res) => {
  const cart = await Cart.findByPk(req.params.id);
  if (cart) {
    res.json(cart);
  } else {
    res.status(404).send('Cart not found');
  }
});

router.put('/:id', async (req, res) => {
  const { userId, ticketId, quantity } = req.body;
  const cart = await Cart.findByPk(req.params.id);
  if (cart) {
    cart.userId = userId;
    cart.ticketId = ticketId;
    cart.quantity = quantity;
    await cart.save();
    res.json(cart);
  } else {
    res.status(404).send('Cart not found');
  }
});

router.delete('/:id', async (req, res) => {
  const cart = await Cart.findByPk(req.params.id);
  if (cart) {
    await cart.destroy();
    res.status(204).send();
  } else {
    res.status(404).send('Cart not found');
  }
});

export default router;
