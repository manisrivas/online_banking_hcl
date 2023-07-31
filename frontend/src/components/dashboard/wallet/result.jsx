import React, { useEffect, useState } from 'react';
import UserContext from '../../login/Login';
import axios from 'axios';
import { useContext } from 'react';

const Result = ({ onDelete }) => {
  const [creditCards, setCreditCards] = useState([]);
  const loggedInUsername = localStorage.getItem('LoginUserName');
  useEffect(() => {
    // Fetch card details from the backend API when the component mounts
    axios.post('http://localhost:3002/cards',{loggedInUsername})
      .then((response) => {
        console.log("in cards ",loggedInUsername);
        setCreditCards(response.data);
      })
      .catch((error) => {
        console.error('Error fetching card details:', error);
      });
  }, []);
 

  
  const handleDeleteCard = (index) => {
    const cardIdToDelete = creditCards[index].id;

    // Send a DELETE request to the backend API to delete the card
    axios.delete(`http://localhost:3002/cards/${cardIdToDelete}`)
      .then(() => {
        // If the deletion is successful, update the local state to remove the card
        setCreditCards((prevCreditCards) => {
          // Use the filter method to create a new array without the deleted card
          return prevCreditCards.filter((card, i) => i !== index);
        });
      })
      .catch((error) => {
        console.error('Error deleting card:', error);
      });
  };

  const handleSetAsPrimary = (index) => {
    setCreditCards((prevCreditCards) => {
      // Create a new array to avoid mutating the state directly
      const newCreditCards = prevCreditCards.map((card, i) => {
        if (i === index) {
          // Set the primary property of the selected card to true
          return { ...card, primary: true };
        } else {
          // Set the primary property of other cards to false
          return { ...card, primary: false };
        }
      });

      return newCreditCards;
    });
  };
  const handleSubmit=(card_number)=>{
    const username=localStorage.getItem('LoginUserName');
    console.log("you wanted to keep ",card_number," as main ");
    console.log("USERNAME IS  ",username ," as main ");
    axios.post('http://localhost:3002/add_main',{username , card_number})
      .then((response) => {
        console.log("sending req with  ",username,card_number);
      })
      .catch((error) => {
        console.error('Error fetching card details:', error);
      });
  }
  return (
    <div className="saved-cards-container">
      <h2>Saved Credit Cards</h2>
      {creditCards && creditCards.length > 0 ? (
        <ul className="saved-cards-list">
          {creditCards.map((card, index) => (
            <li key={card.id}>
              <input
                type="checkbox"
                onClick={()=>{handleSubmit(card.card_number)}}
                checked={card.primary}
                onChange={() => handleSetAsPrimary(index)}
              />
              <strong>{card.name}</strong>
              <p>{card.card_number}</p>
              <p>{card.card_expiration}</p>
              <p>{card.card_cvv}</p>
              <button onClick={() => handleDeleteCard(index)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No saved credit cards.</p>
      )}
    </div>
  );
};

export default Result;
