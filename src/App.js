import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
//import ExpenseDate from './ExpenseDate.js';
//sample data
const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2',
   title: 'New TV',
   amount: 799.49,
   date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e5',
    title: 'Toys',
    amount: 45,
    date: new Date(2019, 5, 12),
  },
  {
    id: 'e6',
    title: 'Food',
    amount: 100,
    date: new Date(2019, 4, 10),
  },
  {
    id: 'e7',
    title: 'Hair Dryer',
    amount: 210,
    date: new Date(2022, 2, 10),
  },
  {
    id: 'e8',
    title: 'iPhone',
    amount: 799,
    date: new Date(2022, 4, 15),
  },
  {
    id: 'e9',
    title: 'Laptop',
    amount: 1500,
    date: new Date(2020, 9, 18),
  },
  {
    id: 'e10',
    title: 'House Rent',
    amount: 950,
    date: new Date(2019, 10, 1),
  },
];

const App = () => {

    const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });

  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
