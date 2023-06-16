import React, { useState } from 'react';
import styled from 'styled-components';





const ExpenseForm = () => {
  const { addExpense, error, setError } = useGlobalContext();
  const [inputState, setInputState] = useState({
    cardHolderName: '',
    cardNumber: '',
    expiryDate: '',
    cvc: '',
  });

  const { cardHolderName, cardNumber, expiryDate, cvc } = inputState;

  const handleInput = (name) => (e) => {
    setInputState({ ...inputState, [name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense(inputState);
    setInputState({
      cardHolderName: '',
      cardNumber: '',
      expiryDate: '',
      cvc: '',
    });
  };

  return (
    <ExpenseFormStyled onSubmit={handleSubmit}>
      {error && <p className='error'>{error}</p>}
      <div className="input-control">
        <input 
          type="text" 
          value={cardHolderName}
          name={'cardHolderName'} 
          placeholder="Card Holder Name"
          onChange={handleInput('cardHolderName')}
        />
      </div>
      <div className="input-control">
        <input 
          value={cardNumber}  
          type="text" 
          name={'cardNumber'} 
          placeholder={'Card Number'}
          onChange={handleInput('cardNumber')} 
        />
      </div>
      <div className="input-control">
        <input 
          value={expiryDate}  
          type="text" 
          name={'expiryDate'} 
          placeholder={'Expiry Date'}
          onChange={handleInput('expiryDate')} 
        />
      </div>
      <div className="input-control">
        <input 
          value={cvc}  
          type="text" 
          name={'cvc'} 
          placeholder={'CVC'}
          onChange={handleInput('cvc')} 
        />
      </div>
      <div className="submit-btn">
        <Button 
          name={'Add Expense'}
          icon={plus}
          bPad={'.8rem 1.6rem'}
          bRad={'30px'}
          bg={'var(--color-accent'}
          color={'#fff'}
        />
      </div>
    </ExpenseFormStyled>
  );
};

const ExpenseFormStyled = styled.form`
display: flex;
flex-direction: column;
gap: 2rem;
input, textarea, select{
    font-family: inherit;
    font-size: inherit;
    outline: none;
    border: none;
    padding: .5rem 1rem;
    border-radius: 5px;
    border: 2px solid #fff;
    background: transparent;
    resize: none;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    color: rgba(34, 34, 96, 0.9);
    &::placeholder{
        color: rgba(34, 34, 96, 0.4);
    }
}
.input-control{
    input{
        width: 100%;
    }
}

.selects{
    display: flex;
    justify-content: flex-end;
    select{
        color: rgba(34, 34, 96, 0.4);
        &:focus, &:active{
            color: rgba(34, 34, 96, 1);
        }
    }
}

.submit-btn{
    button{
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        &:hover{
            background: var(--color-green) !important;
        }
    }
}
`;

export default ExpenseForm;
