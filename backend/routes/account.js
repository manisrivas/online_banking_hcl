const { addCard, getCard, deleteCard } = require('../controllers/cards');


const router = require('express').Router();


router.post('/add-card', addCard)
    .get('/get-card', getCard)
    .delete('/delete-card/:id', deleteCard)
   

module.exports = router