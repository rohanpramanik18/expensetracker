import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

export default function NewExpense(props) {
  const [formState, setFormState] = useState("close");
  const changeFormState = () => {
    if (formState === "close") {
      setFormState("open");
    } else {
      setFormState("close");
    }
  };
  return (
    <div className="new-expense">
      {formState === "close" ? (
        <button onClick={changeFormState} className="add-expense-collapse-btn">
          Add Expense
        </button>
      ) : (
        <ExpenseForm changeStateRef={changeFormState} addData={props.addData} />
      )}
    </div>
  );
}
