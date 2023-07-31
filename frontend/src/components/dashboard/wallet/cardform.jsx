import React, { useState } from 'react';
import Axios from 'axios';

const CreditCardForm = ({ onAddCard }) => {
  const [formData, setFormData] = useState({
    name: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, cardNumber, expiryDate, cvv } = formData;
    // Check if any field is empty
    if (!name || !cardNumber || !expiryDate || !cvv) {
      alert('Please fill all the fields.');
      return;
    }
    const loggedInUsername = localStorage.getItem('LoginUserName');
    // If all validations pass, add the new card
    const newCard = {
      name,
      cardNumber,
      loggedInUsername,
      expiryDate,
      cvv,
    };
    console.log(newCard);
    // Call the onAddCard function with the newCard data
    Axios.post('http://localhost:3002/addCard', newCard)
      .then((response) => {
        
        console.log(loggedInUsername);
        console.log(response);
        // Assuming the server responds with a success message
        if (response.data.message) {
          onAddCard(newCard); // Add the new card to the state in the parent component
          setFormData({
            name: '',
            cardNumber: '',
            expiryDate: '',
            cvv: '',
          });
        } else {
          alert('Failed to add the card.');
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 409) {
          // If the card number already exists in the database (duplicate entry), show an alert
          alert('Card with same number exists.');
        } else {
          alert('card with same number exist.');
        }
        console.error(error);
      });
  };

  return (
    <div className="cont">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Cardholder Name:</label>
            <input type="text" name="name" id="name" value={formData.name} onChange={handleInputChange} placeholder="Cardholder Name" />
          </div>
          <div className="form-group">
            <label htmlFor="cardNumber">Card Number:</label>
            <input type="text" name="cardNumber" id="cardNumber" value={formData.cardNumber} onChange={handleInputChange} placeholder="Card Number" />
          </div>
          <div className="form-group">
            <label htmlFor="expiryDate">Expiry Date:</label>
            <input type="text" name="expiryDate" id="expiryDate" value={formData.expiryDate} onChange={handleInputChange} placeholder="MM/YY" />
          </div>
          <div className="form-group">
            <label htmlFor="cvv">CVV:</label>
            <input type="text" name="cvv" id="cvv" value={formData.cvv} onChange={handleInputChange} placeholder="CVV" />
          </div>
          <button type="submit">Add Card</button>
        </form>
      </div>
    </div>
  );
};

export default CreditCardForm;
