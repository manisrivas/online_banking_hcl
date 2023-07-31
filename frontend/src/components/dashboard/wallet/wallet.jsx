import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../Sidebar/Sidebar';
import CreditCardForm from './cardform'; // Make sure the import is correct
import Result from './result';

import Login from '../../login/Login';
import './wallet.scss';

const Wallet = () => {
  const [creditCards, setCreditCards] = useState([]);

  useEffect(() => {
    axios.post('http://localhost:3002/cards')
      .then((response) => {
        setCreditCards(response.data);
      })
      .catch((error) => {
        console.error('Error fetching card details:', error);
      });
  }, []);

  const handleAddCard = (cardData) => {
    axios.post('http://localhost:3002/addCard', cardData)
      .then((response) => {
        const loggedInUsername = localStorage.getItem('loggedInUsername');
        console.log(loggedInUsername);
        const newCard = { ...cardData, id: response.data.id };
        setCreditCards([...creditCards, newCard]);
      })
      .catch((error) => {
        // console.error('Error adding card:', error);
      });
  };

  const handleDelete = (index) => {
    const cardIdToDelete = creditCards[index].id;
    axios
      .delete(`http://localhost:3002/cards/${cardIdToDelete}`)
      .then(() => {
        setCreditCards((prevCreditCards) =>
          prevCreditCards.filter((card, i) => i !== index)
        );
      })
      .catch((error) => {
        console.error('Error deleting card:', error);
      });
  };

  return (
    <div className="container">
      <Sidebar />
      <div className="main-container">
        <div className="form-container">
          <CreditCardForm onAddCard={handleAddCard} creditCards={creditCards} />
        </div>
        <div className="saved-cards-container">
          <Result creditCards={creditCards} onDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
};

export default Wallet;
