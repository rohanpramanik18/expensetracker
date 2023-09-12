import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

export default function ExpenseItem(props) {
  return (
    <Card>
      <ExpenseDate date={props.date} />
      <div className="items">
        <h2 className="item-name">{props.itemName}</h2>
        <h2 className="item-price">${props.itemPrice}</h2>
      </div>
    </Card>
  );
}
