import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expense = (props) => {
  return (
    <Card className="expenses">
      {props.expense.map((item, index) => {
        return (
          <ExpenseItem
            key={index}
            title={item.title}
            amount={item.amount}
            date={item.date}
          ></ExpenseItem>
        );
      })}
    </Card>
  );
}

export default Expense;
