import React, { useState } from 'react';
import Axios from 'axios';
import './transactions.scss';
const TransactionForm = ({ onAddTransaction }) => {
  const [formData, setFormData] = useState({
    name: '',
    amount: '',
    cvv: '', // Changed 'description' to 'cvv'
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
    const { name, amount, cvv } = formData; // Changed 'description' to 'cvv'

    // Check if any field is empty
    if (!name || !amount || !cvv) { // Changed 'description' to 'cvv'
      alert('Please fill all the fields.');
      return;
    }

    // If all validations pass, add the new transaction
    const newTransaction = {
      name,
      amount,
      cvv, // Changed 'description' to 'cvv'
    };

    // Call the onAddTransaction function with the newTransaction data
    Axios.post('http://localhost:3002/addTransaction', newTransaction)
      .then((response) => {
        console.log(response);
        // Assuming the server responds with a success message
        if (response.data.message) {
          onAddTransaction(newTransaction); // Add the new transaction to the state in the parent component
          setFormData({
            name: '',
            amount: '',
            cvv: '', 
          });
        } else {
          alert('Failed to add the transaction.');
        }
      })
      .catch((error) => {
        console.error(error);
        alert('Failed to add the transaction.');
      });
  };

  return (
    <div className="cont">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" value={formData.name} onChange={handleInputChange} placeholder="Name" />
          </div>
          <div className="form-group">
            <label htmlFor="amount">Amount:</label>
            <input type="text" name="amount" id="amount" value={formData.amount} onChange={handleInputChange} placeholder="Amount" />
          </div>
          <div className="form-group">
            <label htmlFor="cvv">CVV:</label> {/* Changed 'Description' to 'CVV' */}
            <input type="text" name="cvv" id="cvv" value={formData.cvv} onChange={handleInputChange} placeholder="CVV" /> {/* Changed 'description' to 'cvv' */}
          </div>
          <button type="submit">Add Transaction</button>
        </form>
      </div>
    </div>
  );
};

export default TransactionForm;
