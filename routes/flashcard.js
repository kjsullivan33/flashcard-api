const express = require('express');
const router = express.Router();
const cardController = require('../controllers/flashcard');

  // create a card
  router.post('/add-card', cardController.createCard);

  // read a card
  router.get('/:id', cardController.readCard);

  // read all cards
  router.get('/', cardController.getCards);

  // update a card
  router.post('/:id/update', cardController.updateCard);

  // delete a card
  router.delete('/:id/delete', cardController.deleteCard);
  
module.exports = router;