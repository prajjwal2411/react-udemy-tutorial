import { useState } from "react";

import "./Expenses.css";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";

export default function Expenses(props) {

  const [enteredYearState, setEnteredYear] = useState('')
  
  const yearChangeHandler = (enteredYear) => {
    setEnteredYear(enteredYear);
  }
  
  const saveYearFilterDataHandler = (enteredYear) => {
    yearChangeHandler(enteredYear);
  }

  return (
    <>
      <p>{enteredYearState}</p>
      <Card className="expenses">
        <ExpensesFilter onSaveYearFilterData={saveYearFilterDataHandler}/>
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        />
      </Card>
    </>
  );
}
