import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((item) => (
        <ExpenseItem
          title={item.title}
          amount={item.amount}
          location={item.location}
          date={item.date}
        />
      ))}
      {props.items.length===1 && <p className="expenses-list__fallback">Only single Expense here. Please add more...</p>}
    </ul>
  );
};

export default ExpensesList;
