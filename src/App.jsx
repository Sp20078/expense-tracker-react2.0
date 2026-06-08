import { useState, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Summary from "./components/Summary";
import ExpenseChart from "./components/ExpenseChart";
import ExportButton from "./components/ExportButton";

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

  const [searchTerm, setSearchTerm] =
    useState("");

  const [editingExpense, setEditingExpense] =
    useState(null);

  useEffect(() => {
    localStorage.setItem(
      "expenses",
      JSON.stringify(expenses)
    );
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const updateExpense = (
    updatedExpense
  ) => {
    setExpenses(
      expenses.map((expense) =>
        expense.id ===
        updatedExpense.id
          ? updatedExpense
          : expense
      )
    );
  };

  const deleteExpense = (id) => {
    setExpenses(
      expenses.filter(
        (expense) => expense.id !== id
      )
    );
  };

  const filteredExpenses =
    expenses.filter((expense) => {
      const matchesCategory =
        selectedCategory === "All" ||
        expense.category ===
          selectedCategory;

      const matchesSearch =
        expense.title
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          );

      return (
        matchesCategory &&
        matchesSearch
      );
    });

  return (
    <div className="container">
      <h1>Expense Tracker</h1>

      <ExpenseForm
        addExpense={addExpense}
        updateExpense={updateExpense}
        editingExpense={editingExpense}
        setEditingExpense={
          setEditingExpense
        }
      />

      <Summary expenses={expenses} />

      <ExportButton
        expenses={expenses}
      />

      <ExpenseChart
        expenses={expenses}
      />

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

      <div className="search-container">
        <input
          type="text"
          placeholder="Search expenses..."
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(
              e.target.value
            )
          }
        />
      </div>

      <ExpenseList
        expenses={filteredExpenses}
        deleteExpense={deleteExpense}
        setEditingExpense={
          setEditingExpense
        }
      />
    </div>
  );
}

export default App;