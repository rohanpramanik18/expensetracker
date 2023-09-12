import "./App.css";
import ExpensesFilter from "./components/ExpenseFilter/ExpenseFilter";
import ExpenseList from "./components/Expenses/ExpenseList";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

function App() {
  const [newExpenses, setExpenses] = useState([
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2022, 5, 12),
    },
  ]);
  const [selectedYear, setSelectedYear] = useState("2022");

  function addExpense(expense) {
    setExpenses((prevData) => [expense, ...prevData]);
  }

  const filterSelectedYear = (year) => {
    setSelectedYear(year);
  };

  const filtererdExpenses = newExpenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div className="app">
      <NewExpense addData={addExpense} />
      <ExpensesFilter getSelectedYear={filterSelectedYear} />
      <ExpenseList filteredList={filtererdExpenses} />
    </div>
  );
}

export default App;
