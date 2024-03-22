// App.js
import React, { useState } from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import AddExpense from "./Pages/Expenses/Expenses"; 
import ExpenseList from "./Pages/Expenses/Table"; 

export default function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (index) => {
    const updatedExpenses = [...expenses];
    updatedExpenses.splice(index, 1);
    setExpenses(updatedExpenses);
  };

  const editExpense = (index, updatedExpense) => {
    const updatedExpenses = [...expenses];
    updatedExpenses[index] = updatedExpense;
    setExpenses(updatedExpenses);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/addExpense" exact element={<AddExpense addExpense={addExpense} />} />
        <Route path="/expenseList" exact element={<ExpenseList expenses={expenses} deleteExpense={deleteExpense} editExpense={editExpense} />} />
      </Routes>
    </BrowserRouter>
  );
}
