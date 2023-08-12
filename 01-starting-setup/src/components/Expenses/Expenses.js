import { useState } from "react";

import "./Expenses.css";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";

export default function Expenses(props) {

  const [enteredYearState, setEnteredYear] = useState('2020');
  // const [filteredInfoText, setFilterInfoText] = useState('2019, 2021 & 2022');

  // Example of derived state
  // let filteredInfoText = '2019, 2021 & 2022';
  
  // if(enteredYearState === '2019'){
  //   filteredInfoText = '2020, 2021 & 2022';
  // } else if(enteredYearState === '2021'){
  //   filteredInfoText = '2020, 2019 & 2022';
  // } else {
  //   filteredInfoText = '2020, 2021 & 2019';
  // }
  const saveYearFilterDataHandler = (enteredYear) => {
    setEnteredYear(enteredYear);
  }

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter selectedYear={enteredYearState} onSaveYearFilterData={saveYearFilterDataHandler}/>
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
