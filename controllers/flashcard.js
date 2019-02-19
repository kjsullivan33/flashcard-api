Card = require('../models/flashcard');

exports.createCard = (req, res) => {
  let card = new Card({
    question: req.body.question,
    answer: req.body.answer
  });

  card.save( err => {
    if (err){
      return next(err);
    }
    res.send('Card created successfully');
  })
};

exports.readCard = (req, res) => {
  Card.findById(req.params.id, (err, card) => {
    if (err) return next (err);
    res.send(card);
  })
};

exports.getCards = (req, res) => {
  Card.find().then(cards => {
    res.send(cards);
  }).catch(err => {
    console.log(err);
  })
}

exports.updateCard = (req, res) => {
  Card.findOneAndUpdate(req.params.id, {$set: req.body}), (err, card) => {
    if (err) return next (err);
    res.send("Card updated");
  }
};

exports.deleteCard = (req, res) => {
  Card.findOneAndDelete(req.params.id, (err) => {
    if (err) return next (err);
    res.send('Deleted Succesfully');
  })
}
