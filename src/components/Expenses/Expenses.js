import React, { useState } from 'react'; 
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesList from './ExpensesList';
import ExpensesFilter from "./ExpensesFilter";

const Expense = (props) => {
  const [filteredYear, setFilteredYear] =  useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filterExpense = props.expense.filter((el) => el.date.getFullYear() == filteredYear);


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler}></ExpensesFilter>
        <ExpensesList item={filterExpense}></ExpensesList>
      </Card>
    </div>
  );
};

export default Expense;
