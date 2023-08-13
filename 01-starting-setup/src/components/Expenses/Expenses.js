import { useState } from "react";

import "./Expenses.css";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

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
  const filteredExpenses = props.items.filter((expense) => expense.date.getFullYear() === +enteredYearState);
  
  const saveYearFilterDataHandler = (enteredYear) => {
    setEnteredYear(enteredYear);
  }

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={enteredYearState}
          onSaveYearFilterData={saveYearFilterDataHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </>
  );
}
