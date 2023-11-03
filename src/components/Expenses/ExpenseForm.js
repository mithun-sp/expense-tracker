import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState(0)
    const [date, setDate] = useState(0)

    const onSubmit = (e) => {
        e.preventDefault()
        console.log("title:",title)
        console.log("amount:", amount)
        console.log("date:",date)
        setTitle("")
        setAmount(0)
    }

  return (
    <div>
      <h2>ExpenseForm</h2>
      <div>
        <form>
          <label htmlFor="title">Expense Title</label>
          <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
          <label htmlFor="amount">Expense Amount</label>
          <input type="number" id="amount" name="amount" value={amount} onChange={(e) => setAmount(e.target.value)}  />
          <label htmlFor="date">Title</label>
          <input type="date" id="date" name="date" onChange={(e) => setDate(e.target.value)}  />
          <button onClick={(e) => onSubmit(e)}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ExpenseForm;
