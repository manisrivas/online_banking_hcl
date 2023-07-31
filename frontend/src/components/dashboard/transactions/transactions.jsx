import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../Sidebar/Sidebar';
import TransactionForm from './transactionform'; // New component for adding transactions
import TransactionHistory from './TransactionHitory'; // New component for displaying transactions
import './transactions.scss';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchTransactions();
  }, []);

  // Fetch transaction data from the server
  const fetchTransactions = () => {
    axios.get('http://localhost:3002/transactions')
      .then((response) => {
        setTransactions(response.data);
      })
      .catch((error) => {
        console.error('Error fetching transaction details:', error);
      });
  };

  // Add a new transaction
  const handleAddTransaction = (transactionData) => {
    axios.post('http://localhost:3002/addTransaction', transactionData)
      .then((response) => {
        const newTransaction = { ...transactionData, id: response.data.id };
        setTransactions([...transactions, newTransaction]);
      })
      .catch((error) => {
        console.error('Error adding transaction:', error);
      });
  };

  // Delete a transaction
  const handleDeleteTransaction = (index) => {
    const transactionIdToDelete = transactions[index].id;
    axios
      .delete(`http://localhost:3002/transactions/${transactionIdToDelete}`)
      .then(() => {
        setTransactions((prevTransactions) =>
          prevTransactions.filter((transaction, i) => i !== index)
        );
      })
      .catch((error) => {
        console.error('Error deleting transaction:', error);
      });
  };

  return (
    <div className="container">
      <Sidebar />
      <div className="main-container">
        <div className="transaction-container">
          <TransactionForm onAddTransaction={handleAddTransaction} />
        </div>
        <div className="transaction-history-container">
          <TransactionHistory transactions={transactions} onDelete={handleDeleteTransaction} />
        </div>
      </div>
    </div>
  );
};

export default Transactions;
