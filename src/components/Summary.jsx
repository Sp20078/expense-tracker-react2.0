function Summary({ expenses }) {
  const total = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  const highestExpense =
    expenses.length > 0
      ? Math.max(
          ...expenses.map(
            (expense) => expense.amount
          )
        )
      : 0;

  return (
    <div className="summary-container">
      <div className="summary-card">
        <h3>Total Spending</h3>
        <p>₹{total}</p>
      </div>

      <div className="summary-card">
        <h3>Transactions</h3>
        <p>{expenses.length}</p>
      </div>

      <div className="summary-card">
        <h3>Highest Expense</h3>
        <p>₹{highestExpense}</p>
      </div>
    </div>
  );
}

export default Summary;