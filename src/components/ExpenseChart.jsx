import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function ExpenseChart({ expenses }) {
  const chartData = expenses.map(
    (expense) => ({
      name: expense.title,
      amount: expense.amount,
    })
  );

  return (
    <div className="chart-container">
      <h2>Expense Chart</h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <BarChart data={chartData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="amount" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ExpenseChart;