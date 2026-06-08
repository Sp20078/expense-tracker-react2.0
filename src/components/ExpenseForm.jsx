import { useState, useEffect } from "react";

function ExpenseForm({
  addExpense,
  updateExpense,
  editingExpense,
  setEditingExpense,
}) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (editingExpense) {
      setTitle(editingExpense.title);
      setAmount(editingExpense.amount);
      setCategory(editingExpense.category);
      setDate(editingExpense.date);
    }
  }, [editingExpense]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !amount || !category || !date) {
      alert("Please fill all fields");
      return;
    }

    const expense = {
      id: editingExpense
        ? editingExpense.id
        : Date.now(),
      title,
      amount: Number(amount),
      category,
      date,
    };

    if (editingExpense) {
      updateExpense(expense);
      setEditingExpense(null);
    } else {
      addExpense(expense);
    }

    setTitle("");
    setAmount("");
    setCategory("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button type="submit">
        {editingExpense
          ? "Update Expense"
          : "Add Expense"}
      </button>
    </form>
  );
}

export default ExpenseForm;