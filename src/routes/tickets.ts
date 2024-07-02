import { Router } from 'express';
import Ticket from '../models/Ticket';

const router = Router();

router.post('/', async (req, res) => {
  const { title, description, price } = req.body;
  const ticket = await Ticket.create({ title, description, price });
  res.json(ticket);
});

router.get('/', async (req, res) => {
  const tickets = await Ticket.findAll();
  res.json(tickets);
});

router.get('/:id', async (req, res) => {
  const ticket = await Ticket.findByPk(req.params.id);
  if (ticket) {
    res.json(ticket);
  } else {
    res.status(404).send('Ticket not found');
  }
});

router.put('/:id', async (req, res) => {
  const { title, description, price } = req.body;
  const ticket = await Ticket.findByPk(req.params.id);
  if (ticket) {
    ticket.title = title;
    ticket.description = description;
    ticket.price = price;
    await ticket.save();
    res.json(ticket);
  } else {
    res.status(404).send('Ticket not found');
  }
});

router.delete('/:id', async (req, res) => {
  const ticket = await Ticket.findByPk(req.params.id);
  if (ticket) {
    await ticket.destroy();
    res.status(204).send();
  } else {
    res.status(404).send('Ticket not found');
  }
});

export default router;
