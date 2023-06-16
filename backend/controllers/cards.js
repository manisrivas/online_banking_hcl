const Card = require("../models/cardmodel");

exports.addCard = async (req, res) => {
  const { cardHolderName, cardNumber, expiryDate, cvc } = req.body;

  const card = new Card({
    cardHolderName,
    cardNumber,
    expiryDate,
    cvc,
   
  });

  try {
    // Validations
    if (!cardHolderName || !cardNumber || !expiryDate || !cvc) {
      return res.status(400).json({ message: 'All fields are required!' });
    }
    if (typeof cardNumber !== 'number' || cardNumber <= 0) {
      return res.status(400).json({ message: 'Card number must be a positive number!' });
    }

    await card.save();
    res.status(200).json({ message: 'Card Added' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }

  console.log(card);
};

exports.getCard = async (req, res) => {
  try {
    const cards = await Card.find().sort({ createdAt: -1 });
    res.status(200).json(cards);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.deleteCard = async (req, res) => {
  const { id } = req.params;
  Card.findByIdAndDelete(id)
    .then((card) => {
      res.status(200).json({ message: 'Card Deleted' });
    })
    .catch((err) => {
      res.status(500).json({ message: 'Server Error' });
    });
};
