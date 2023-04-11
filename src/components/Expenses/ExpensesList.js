import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css"
const ExpensesList = (props) => {

  if(props.item.length === 0){
    return <h2 className="expenses-list__fallback">Found no expense</h2>
  }
  return (
    <ul className="expenses-list">
      {props.item.map((item, index) => {
        return (
          <ExpenseItem
            key={index}
            title={item.title}
            amount={item.amount}
            date={item.date}
          ></ExpenseItem>
        );
      })}
    </ul>
  );
};

export default ExpensesList;
