import React, { useState } from "react";
import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title)
  const [amount, setAmount] = useState(props.amount)

  const handleTitle = () => {
    setTitle("Updated")
  }

  const handleAmount = () => {
    setAmount("100")
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <ExpenseDetails amount={amount} location={props.location} title={title} />
      <button onClick={handleTitle}>Change Title</button>
      <button onClick={handleAmount}>Change Amount</button>
    </Card>
  );
};

export default ExpenseItem;
