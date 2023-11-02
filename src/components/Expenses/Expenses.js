import React, { useEffect, useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [data, setData] = useState(props.items);

  const deleteExpense = (index) => {
    let newData = data.filter((el) => {
      return el.id !== index;
    });
    setData(newData);
  };

  return (
    <Card className="expenses">
      {data.map((item) => {
        return (
          <div>
            <ExpenseItem
              title={item.title}
              amount={item.amount}
              location={item.location}
              date={item.date}
            />
            <button onClick={() => deleteExpense(item.id)}>
              Delete Expense
            </button>
          </div>
        );
      })}
    </Card>
  );
};

export default Expenses;
