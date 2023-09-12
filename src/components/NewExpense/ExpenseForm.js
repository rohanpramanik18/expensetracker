import { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm({ addData, changeStateRef }) {
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleChanged = (event) => {
    setUserInput((latestState) => {
      return {
        ...latestState,
        title: event.target.value,
      };
    });
  };

  const amountChanged = (event) => {
    setUserInput((latestState) => {
      return {
        ...latestState,
        amount: event.target.value,
      };
    });
  };

  const dateChanged = (event) => {
    setUserInput((latestState) => {
      let date = event.target.value;
      return {
        ...latestState,
        date: new Date(date),
      };
    });
  };

  const onExpenseSubmit = (e) => {
    e.preventDefault();
    setUserInput((latestState) => {
      return {
        ...latestState,
        id: Math.random(),
      };
    });
    addData(userInput);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Expense Title</label>
          <input
            type="text"
            onChange={titleChanged}
            value={userInput.title}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            onChange={amountChanged}
            value={userInput.amount}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChanged}
            value={userInput.date.toString()}
          ></input>
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="button" onClick={changeStateRef}>
          Cancel
        </button>
        <button type="Submit" onClick={onExpenseSubmit}>
          Add Expense
        </button>
      </div>
    </form>
  );
}
