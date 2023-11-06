import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  // const [filtered, setFiltered] = useState([])

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((item) => item.date.getFullYear().toString()===filteredYear)
  

  // const deleteExpense = (index) => {
  //   let newData = data.filter((el) => {
  //     return el.id !== index;
  //   });
  //   setData(newData);
  // };

  return (
    <Card className="expenses">
       <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {filteredExpenses.length===0 ? <p>No Expenses Found</p> : filteredExpenses.map((item) => {
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
