import React from "react";

const FinanceSummary = ({ summary }) => {
  return (
    <div className="finance-summary">
      <h2>Finance Summary</h2>
      <p><strong>Total Revenue:</strong> ${summary.totalRevenue}</p>
      <p><strong>Outstanding Balance:</strong> ${summary.outstandingBalance}</p>
      <p><strong>Recent Transactions:</strong> {summary.recentTransactions} entries</p>
    </div>
  );
};

export default FinanceSummary;
