import React, { useState } from "react";

const AddTransactionForm = ({ onAdd }) => {
  const [newTransaction, setNewTransaction] = useState({
    description: "",
    amount: "",
    type: "income",
    date: "",
  });

  const handleChange = (e) => {
    setNewTransaction({ ...newTransaction, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(newTransaction);
    setNewTransaction({ description: "", amount: "", type: "income", date: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="transaction-form">
      <h3>Add Transaction</h3>
      <input type="text" name="description" placeholder="Description" value={newTransaction.description} onChange={handleChange} required />
      <input type="number" name="amount" placeholder="Amount" value={newTransaction.amount} onChange={handleChange} required />
      <select name="type" value={newTransaction.type} onChange={handleChange}>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <input type="date" name="date" value={newTransaction.date} onChange={handleChange} required />
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default AddTransactionForm;
