import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TransactionHistory = ({ onDelete }) => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Fetch transaction details from the backend API when the component mounts
    axios.get('http://localhost:3002/transactions')
      .then((response) => {
        setTransactions(response.data);
      })
      .catch((error) => {
        console.error('Error fetching transaction details:', error);
      });
  }, []);

  const handleDeleteTransaction = (index) => {
    const transactionIdToDelete = transactions[index].id;

    // Send a DELETE request to the backend API to delete the transaction
    axios.delete(`http://localhost:3002/transactions/${transactionIdToDelete}`)
      .then(() => {
        // If the deletion is successful, update the local state to remove the transaction
        setTransactions((prevTransactions) => {
          // Use the filter method to create a new array without the deleted transaction
          return prevTransactions.filter((transaction, i) => i !== index);
        });
      })
      .catch((error) => {
        console.error('Error deleting transaction:', error);
      });
  };

  return (
    <div className="transaction-history-container">
      <h2>Transaction History</h2>
      {transactions && transactions.length > 0 ? (
        <ul className="transaction-history-list">
          {transactions.map((transaction, index) => (
            <li key={transaction.id}>
              <strong>{transaction.name}</strong>
              <p>Amount: {transaction.amount}</p>
              <p>CVV: {transaction.cvv}</p>
              <button onClick={() => handleDeleteTransaction(index)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No transaction history available.</p>
      )}
    </div>
  );
};

export default TransactionHistory;
