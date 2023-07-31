import React from 'react';

const GoalPieChart = ({ goalName, currentAmount, targetAmount }) => {
  const amountLeft = targetAmount - currentAmount;

  return (
    <div>
      <h3>Goal Name: {goalName}</h3>
      <p>Target Amount: ${targetAmount}</p>
      <p>Amount Left: ${amountLeft}</p>
    </div>
  );
};

export default GoalPieChart;