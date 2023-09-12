import "./ExpenseItem.css";

export default function ExpenseDate({ date }) {
  console.log(date);
  let month = date.toLocaleString("en-US", { month: "long" });
  let day = date.toLocaleString("en-US", { day: "2-digit" });
  let year = date.getFullYear();
  return (
    <div className="date">
      <p className="month">{month}</p>
      <p className="year">{year}</p>
      <h1 className="day">{day}</h1>
    </div>
  );
}
