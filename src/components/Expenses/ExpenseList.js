import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

export default function ExpenseList({ filteredList }) {
  if (filteredList.length === 0) {
    return <p className="no-expenses-alert">No expensed found.</p>;
  }

  return filteredList.map((e) => (
    <ExpenseItem
      date={e.date}
      itemName={e.title}
      itemPrice={e.amount}
      key={e.id}
    />
  ));
}
