import React, { useState } from 'react';


const Expensive = () => {
  const [expenses, setExpenses] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');

  const addExpense = (e) => {
    e.preventDefault();
    if (expenseName && expenseAmount) {
      const newExpense = {
        name: expenseName,
        amount: parseFloat(expenseAmount),
      };
      setExpenses([...expenses, newExpense]);
      setTotalAmount(totalAmount + newExpense.amount);
      setExpenseName('');
      setExpenseAmount('');
    }
  };

  const removeExpense = (index) => {
    const removedExpense = expenses[index];
    setExpenses(expenses.filter((_, i) => i !== index));
    setTotalAmount(totalAmount - removedExpense.amount);
  };

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <form id="expense-form" onSubmit={addExpense}>
        <input
          type="text"
          id="expense-name"
          placeholder="Expense Name"
          required
          value={expenseName}
          onChange={(e) => setExpenseName(e.target.value)}
        />
        <input
          type="number"
          id="expense-amount"
          placeholder="Amount"
          required
          value={expenseAmount}
          onChange={(e) => setExpenseAmount(e.target.value)}
        />
        <button type="submit">Add Expense</button>
      </form>
      <div className="expense-table">
        <table>
          <thead>
            <tr>
              <th>Expense Name</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody id="expense-list">
            {expenses.map((expense, index) => (
              <tr key={index}>
                <td>{expense.name}</td>
                <td>${expense.amount}</td>
                <td>
                  <button onClick={() => removeExpense(index)} style={{backgroundColor:'red'}}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="total-amount">
          <strong>Total:</strong> $<span id="total-amount">{totalAmount}</span>
        </div>
      </div>
    </div>
  );
};

export default Expensive;