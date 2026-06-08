import ExpenseItem from "./ExpenseItem";

function ExpenseList({
  expenses,
  deleteExpense,
  setEditingExpense,
}) {
  return (
    <div>
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          expense={expense}
          deleteExpense={deleteExpense}
          setEditingExpense={
            setEditingExpense
          }
        />
      ))}
    </div>
  );
}

export default ExpenseList;