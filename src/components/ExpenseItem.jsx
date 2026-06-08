function ExpenseItem({
  expense,
  deleteExpense,
  setEditingExpense,
}) {
  return (
    <div className="expense-card">
      <h3>{expense.title}</h3>

      <p>
        Amount: ₹{expense.amount}
      </p>

      <p>
        Category: {expense.category}
      </p>

      <p>
        Date:{" "}
        {new Date(
          expense.date
        ).toLocaleDateString()}
      </p>

      <button
        onClick={() =>
          setEditingExpense(expense)
        }
      >
        Edit
      </button>

      <button
        onClick={() =>
          deleteExpense(expense.id)
        }
      >
        Delete
      </button>
    </div>
  );
}

export default ExpenseItem;