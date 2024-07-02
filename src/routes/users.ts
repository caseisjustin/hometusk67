import { Router } from 'express';
import User from '../models/User';

const router = Router();

router.post('/', async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.create({ name, email, password });
  res.json(user);
});

router.get('/', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

router.get('/:id', async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
});

router.put('/:id', async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findByPk(req.params.id);
  if (user) {
    user.name = name;
    user.email = email;
    user.password = password;
    await user.save();
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
});

router.delete('/:id', async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (user) {
    await user.destroy();
    res.status(204).send();
  } else {
    res.status(404).send('User not found');
  }
});

export default router;
