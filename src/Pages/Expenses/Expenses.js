import React, { useState } from 'react';
import { MDBInput } from 'mdb-react-ui-kit';
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';

const AddExpense = ({ addExpense }) => {
  const [expense, setExpense] = useState({
    employeeName: '',
    expenseCategories: '',
    expenseDate: '',
    description: '',
    paidBy: '',
    amount: 0,
    type: ''
  });

  const [formError, setFormError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense({ ...expense, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !expense.employeeName.trim() ||
      !expense.expenseCategories.trim() ||
      !expense.expenseDate ||
      !expense.description.trim() ||
      !expense.amount ||
      expense.amount <= 0
    ) {
      setFormError('Please fill in all required fields.');
      setSuccessMessage('');
      return;
    }
    setFormError('');
    addExpense(expense);
    setExpense({
      employeeName: '',
      expenseCategories: '',
      expenseDate: '',
      description: '',
      paidBy: '',
      amount: 0,
      type: ''
    });

    setSuccessMessage('The addition has been completed successfully.');

    let storedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
    storedExpenses = [...storedExpenses, expense];
    localStorage.setItem('expenses', JSON.stringify(storedExpenses));

    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  return (
    <div>
      <Navbar />
      <div className='container mt-5 pt-5 '>
        <div className='row'>
          <div className='col-md-8  ml-auto mr-auto form-edit'>
            <div className='d-flex mb-4 add-text'>
              <h2 className='mb-4 flex-grow-1 addd' >Add Expense</h2>
              <Link to="/expenseList" className='text-decoration-none'>
                <button className='btn-try'>
                  <h4 >schedule
                    <i className="fa-solid fa-eye fa-beat ml-2 " style={{ fontSize: "18px" }}></i>
                  </h4>
                </button>
              </Link>
            </div>
            <form onSubmit={handleSubmit}>
              <div className='form-row'>
                <div className='col-md-6'>
                  <label>Employee Name</label>
                  <MDBInput className='mb-4' type='text' name="employeeName" id='form1Example1' value={expense.employeeName} onChange={handleChange} />
                </div>
                <div className='col-md-6'>
                  <label> Category </label>
                  <MDBInput className='mb-4' type='text' id='form1Example2' name="expenseCategories" value={expense.expenseCategories} onChange={handleChange} />
                </div>
              </div>
              <div className='form-row'>
                <div className='col-md-6'>
                  <label> Expense Date</label>
                  <MDBInput className='mb-4' type='date' id='form1Example2' name="expenseDate" value={expense.expenseDate} onChange={handleChange} />
                </div>
                <div className='col-md-6'>
                  <label>Description</label>
                  <MDBInput className='mb-4' type='text' id='form1Example2' name="description" value={expense.description} onChange={handleChange} />
                </div>
              </div>
              <div className='form-row'>
                <div className='col-md-6'>
                  <label>Paid By</label><br />
                  <select required className="form-control" name='paidBy' value={expense.paidBy} onChange={handleChange}>
                    <option value=''>Select...</option>
                    <option value='Company'>Company</option>
                    <option value='Employee'>Employee</option>
                  </select>
                </div>
                <div className='col-md-6'>
                  <label>Amount</label>
                  <MDBInput required className='mb-4' type='number' id='form1Example2' name="amount" value={expense.amount} onChange={handleChange} />
                </div>
              </div>
              <div className='form-row'>
                <div className='col-md-12'>
                  <label>Type</label>
                  <select required name="type" className="form-control mb-4" value={expense.type} onChange={handleChange}>
                    <option value=''>Select...</option>
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                  </select>
                </div>
              </div>
              {formError && <p className="text-danger text-center">{formError}</p>}
              {successMessage && <p className="text-success text-center">{successMessage}</p>}
              <button style={{ color: "#fff", backgroundColor: "#714b67", fontSize: "20px", fontWeight: "600" }} type='submit' className=' btn btn-block pt-2 pb-2' >
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddExpense;
