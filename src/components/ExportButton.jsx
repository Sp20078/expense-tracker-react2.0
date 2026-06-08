function ExportButton({ expenses }) {
  const exportToCSV = () => {
    const headers =
      "Title,Amount,Category,Date\n";

    const rows = expenses
      .map(
        (expense) =>
          `${expense.title},${expense.amount},${expense.category},${expense.date}`
      )
      .join("\n");

    const csvContent =
      headers + rows;

    const blob = new Blob(
      [csvContent],
      { type: "text/csv" }
    );

    const url =
      window.URL.createObjectURL(
        blob
      );

    const link =
      document.createElement("a");

    link.href = url;

    link.download =
      "expenses.csv";

    link.click();

    window.URL.revokeObjectURL(
      url
    );
  };

  return (
    <button
  className="export-btn"
  onClick={exportToCSV}
>
      Export CSV
    </button>
  );
}

export default ExportButton;