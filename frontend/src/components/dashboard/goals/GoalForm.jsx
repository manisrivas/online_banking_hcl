import React, { useState } from 'react';
import './GoalForm.scss'
const GoalForm = ({ onAddGoal }) => {
  const [goalName, setGoalName] = useState('');
  const [targetAmount, setTargetAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation if needed
    if (!goalName || !targetAmount) return;
    const newGoal = {
      name: goalName,
      targetAmount: parseFloat(targetAmount),
    };
    onAddGoal(newGoal);
    setGoalName('');
    setTargetAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="goalName">Goal Name:</label>
        <input type="text" id="goalName" value={goalName} onChange={(e) => setGoalName(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="targetAmount">Target Amount:</label>
        <input type="number" id="targetAmount" value={targetAmount} onChange={(e) => setTargetAmount(e.target.value)} required />
      </div>
      <div>
        <button type="submit">Add Goal</button>
      </div>
    </form>
  );
};

export default GoalForm;
