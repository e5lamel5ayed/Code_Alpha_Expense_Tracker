import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';

const ExpenseList = ({ expenses, deleteExpense }) => {
  const [categoryFilter, setCategoryFilter] = useState('');

  const filteredExpenses = categoryFilter
    ? expenses.filter(expense => expense.expenseCategories.toLowerCase().includes(categoryFilter.toLowerCase()))
    : expenses;

  const totalIncome = expenses.reduce((total, expense) => {
    return expense.type === 'income' ? total + parseFloat(expense.amount) : total;
  }, 0);

  const totalExpense = expenses.reduce((total, expense) => {
    return expense.type === 'expense' ? total + parseFloat(expense.amount) : total;
  }, 0);

  const balance = totalIncome - totalExpense;

  return (
    <div className='pt-4 '>
      <Navbar />
      <div className='container mt-5 pt-5'>
        <div className='row'>
          <div className='col-md-12'>
            <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap">
              <div className='d-flex col-md-6'>
                <Link to="../addExpense">
                  <button className='btn-new m-0'>New</button>
                  <button className='btn-icon'> <i className="fa-solid fa-sort-down"></i></button>
                </Link>
                <h3 className='addd' >My Expense </h3>
              </div>

              <div className='col-md-6 d-flex justify-content-end' >
                <input
                style={{
                  padding: "2% 7%",
                  borderRadius: "7px",
                  border:" 2px #714b67 solid"
                }}
                  type="text"
                  placeholder="Search by category"
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                />
              </div>
            </div>

            <div>
              <div className="d-flex text-center blance">
                <div className="mr-4 col-md-3">
                  <span className='amount'>
                    ${totalIncome}
                  </span>
                  <br />
                  <strong>Total Income </strong>
                </div>
                <div className='col-md-1 d-flex align-items-center' style={{ color: "#714b67", fontSize: "35px" }}>
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
                <div className="mr-4 col-md-3">
                  <span className='amount'>
                    ${totalExpense}
                  </span>
                  <br />
                  <strong>Total Expense</strong>
                </div>
                <div className='col-md-1 d-flex align-items-center' style={{ color: "#714b67", fontSize: "35px" }}>
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
                <div className="col-md-3">
                  <span className='amount'>
                    ${balance}
                  </span>
                  <br />
                  <strong>Balance</strong>
                </div>
              </div>
            </div>

            <table className="table table-hover table-edit table-responsive-md table-responsive-sm">
              <thead>
                <tr
                  style={{
                    backgroundColor: " #714b67",
                    color: " #fff"
                  }}
                >
                  <th>Employee Name</th>
                  <th>Categories</th>
                  <th>Expense Date</th>
                  <th>Description</th>
                  <th>Paid By</th>
                  <th>Amount</th>
                  <th>Type</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredExpenses.map((expense, index) => (
                  <tr key={index}>
                    <td>{expense.employeeName}</td>
                    <td>{expense.expenseCategories}</td>
                    <td>{expense.expenseDate}</td>
                    <td>{expense.description}</td>
                    <td>{expense.paidBy}</td>
                    <td>{expense.amount}</td>
                    <td>{expense.type}</td>
                    <td>
                      <button style={{ backgroundColor: "#fff", border: "none", fontSize: "20px" }} ><i className="fa-regular fa-pen-to-square"></i></button>
                      <button className='mr-2' style={{ color: "red", backgroundColor: "#fff", border: "none", fontSize: "20px" }} onClick={() => deleteExpense(index)}><i className="fa-regular fa-trash-can"></i></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseList;
