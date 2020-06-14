const cardsRouter = require('express').Router();
const fs = require('fs').promises;
const path = require('path');

const cardsArray = path.join(__dirname, '../data/cards.json');
/* eslint-disable */
const cards = async () => {
  return JSON.parse(await fs.readFile(cardsArray, { encoding: 'utf8' }));
};
/* eslint-enable */
cardsRouter.get('/', async (req, res) => {
  res.send(await cards());
});

module.exports = cardsRouter;
