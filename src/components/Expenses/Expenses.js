import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  // const deleteExpense = (index) => {
  //   let newData = data.filter((el) => {
  //     return el.id !== index;
  //   });
  //   setData(newData);
  // };

  return (
    <Card className="expenses">
       <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {props.items.map((item) => {
        return (
          <div key={item.id}>
            <ExpenseItem
              title={item.title}
              amount={item.amount}
              location={item.location}
              date={item.date}
            />
            {/* <button onClick={() => deleteExpense(item.id)}>
              Delete Expense
            </button> */}
          </div>
        );
      })}
    </Card>
  );
};

export default Expenses;
