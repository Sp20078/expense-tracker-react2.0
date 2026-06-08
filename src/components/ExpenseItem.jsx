function ExpenseItem({ expense, deleteExpense }) {
  return (
    <div className="expense-card">
      <h3>{expense.title}</h3>

      <p>Amount: ₹{expense.amount}</p>

      <p>Category: {expense.category}</p>

      <button onClick={() => deleteExpense(expense.id)}>
        Delete
      </button>
    </div>
  );
}

export default ExpenseItem;