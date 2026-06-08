import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (id) => {
    setExpenses(
      expenses.filter(
        (expense) => expense.id !== id
      )
    );
  };

  return (
    <div className="container">
      <h1>Expense Tracker</h1>

      <ExpenseForm addExpense={addExpense} />

      <ExpenseList
        expenses={expenses}
        deleteExpense={deleteExpense}
      />
    </div>
  );
}

export default App;