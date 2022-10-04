import React, {useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import './Expenses.css'
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }
  const filteredExpenses = props.items.filter((expense => {
    return expense.date.getFullYear() === parseInt(filteredYear)
  }))
  
 
    return (
      <li>
      <div>
        <Card className="expenses">
        <ExpensesFilter selected ={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses={filteredExpenses}/>
       <ExpensesList items={filteredExpenses} />  
        </Card>
    </div>  
    </li>  
    );
}

export default Expenses;