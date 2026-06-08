import { useState, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Summary from "./components/Summary";

function App() {
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses =
      localStorage.getItem("expenses");

    return savedExpenses
      ? JSON.parse(savedExpenses)
      : [];
  });

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  useEffect(() => {
    localStorage.setItem(
      "expenses",
      JSON.stringify(expenses)
    );
  }, [expenses]);

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

  const filteredExpenses =
    selectedCategory === "All"
      ? expenses
      : expenses.filter(
          (expense) =>
            expense.category ===
            selectedCategory
        );

  return (
    <div className="container">
      <h1>Expense Tracker</h1>

      <ExpenseForm addExpense={addExpense} />

      <Summary expenses={expenses} />

      <div className="filter-container">
        <label>
          Filter by Category:
        </label>

        <select
          value={selectedCategory}
          onChange={(e) =>
            setSelectedCategory(
              e.target.value
            )
          }
        >
          <option value="All">
            All
          </option>

          <option value="Food">
            Food
          </option>

          <option value="Travel">
            Travel
          </option>

          <option value="Shopping">
            Shopping
          </option>

          <option value="Entertainment">
            Entertainment
          </option>
        </select>
      </div>

      <ExpenseList
        expenses={filteredExpenses}
        deleteExpense={deleteExpense}
      />
    </div>
  );
}

export default App;