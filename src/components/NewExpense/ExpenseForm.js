import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("")
  const [enteredAmount, setEnteredAmount] = useState("")
  const [enteredLoaction, setEnteredLocation] = useState("")
  const [enteredDate, setEnteredDate] = useState("")

  const handleTitleChange = (e) => {
    setEnteredTitle(e.target.value)
  }

  const handleAmountChange = (e) => {
    setEnteredAmount(e.target.value)
  }

  const handleLocationChange = (e) => {
    setEnteredLocation(e.target.value)
  }

  const handleDateChange = (e) => {
    setEnteredDate(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    let expenseData = {
      title:enteredTitle,
      amount:enteredAmount,
      location:enteredLoaction,
      date:new Date(enteredDate)
    }
    props.onSaveExpenseData(expenseData)

    setEnteredTitle("")
    setEnteredAmount("")
    setEnteredLocation("")
    setEnteredDate("")
  }


  return (
    <form onSubmit={handleSubmit}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={enteredTitle} onChange={handleTitleChange} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={handleAmountChange} />
        </div>
        <div className='new-expense__control'>
          <label>Location</label>
          <input type='text' value={enteredLoaction} onChange={handleLocationChange} />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2022-12-31' value={enteredDate} onChange={handleDateChange} />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;