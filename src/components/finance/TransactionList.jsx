import React from "react";

const TransactionList = ({ transactions, onDelete }) => {
  return (
    <div className="transaction-list">
      <h3>Transaction History</h3>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.date} - {transaction.description} - ${transaction.amount} ({transaction.type})
            <button onClick={() => onDelete(transaction.id)} style={{ marginLeft: "10px", color: "red" }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
