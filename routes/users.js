const usersRouter = require('express').Router();
const fs = require('fs').promises;
const path = require('path');

const users = path.join(__dirname, '../data/users.json');
/* eslint-disable */
const usersArr = async () => {
  return JSON.parse(await fs.readFile(users, { encoding: 'utf8' }));
};

const userId = async (id) => (await usersArr()).find((user) => user._id === id);
/* eslint-disable */
usersRouter.get('/', async (req, res) => {
  res.send(await usersArr());
});

usersRouter.get('/:id', async (req, res) => {
  const user = await userId(req.params.id);
  if (user) {
    res.send(user);
  } else {
    res.status(404).send({
      message: 'Нет пользователя с таким id',
    });
  }
});

module.exports = usersRouter;
