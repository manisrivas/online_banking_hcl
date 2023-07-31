import React, { useState } from 'react';

const TransactionForm = ({ goals, onAddTransaction }) => {
  const [selectedGoal, setSelectedGoal] = useState('');
  const [depositAmount, setDepositAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation if needed
    if (!selectedGoal || !depositAmount) return;
    const newTransaction = {
      goal: selectedGoal,
      amount: parseFloat(depositAmount),
    };
    onAddTransaction(newTransaction);
    setSelectedGoal('');
    setDepositAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="goalSelect">Select Goal:</label>
        <select id="goalSelect" value={selectedGoal} onChange={(e) => setSelectedGoal(e.target.value)} required>
          <option value="" disabled>Select a goal</option>
          {goals.map((goal) => (
            <option key={goal.id} value={goal.name}>{goal.name}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="depositAmount">Deposit Amount:</label>
        <input type="number" id="depositAmount" value={depositAmount} onChange={(e) => setDepositAmount(e.target.value)} required />
      </div>
      <div>
        <button type="submit">Deposit</button>
      </div>
    </form>
  );
};

export default TransactionForm;
