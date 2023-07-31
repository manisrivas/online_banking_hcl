import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../Sidebar/Sidebar';
import TransactionForm from './TransactionForm';
import GoalForm from './GoalForm';
import GoalPieChart from './GoalPieChart';
import './Goals.scss';

const Goals = () => {
  const [transactions, setTransactions] = useState([]);
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetchTransactions();
    fetchGoals();
  }, []);

  const fetchTransactions = () => {
    axios.get('http://localhost:3002/transactions')
      .then((response) => {
        setTransactions(response.data);
      })
      .catch((error) => {
        console.error('Error fetching transaction details:', error);
      });
  };

  const fetchGoals = () => {
    axios.get('http://localhost:3002/goals')
      .then((response) => {
        setGoals(response.data);
      })
      .catch((error) => {
        console.error('Error fetching goals:', error);
      });
  };

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

  const handleAddGoal = (goalData) => {
    axios.post('http://localhost:3002/addGoal', goalData)
      .then((response) => {
        const newGoal = { ...goalData, id: response.data.id };
        setGoals([...goals, newGoal]);
      })
      .catch((error) => {
        console.error('Error adding goal:', error);
      });
  };


  return (
    <div className="container">
      <Sidebar />
      <div className="main-container">
        <div className="goal-container">
          <GoalForm onAddGoal={handleAddGoal} />
        </div>
        <div className="transaction-container">
          <TransactionForm goals={goals} onAddTransaction={handleAddTransaction} />
        </div>
        <div className="pie-chart-container">
          {goals.map((goal) => (
            <div key={goal.id}>
              <GoalPieChart
                goalName={goal.name}
                targetAmount={goal.targetAmount}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Goals;
