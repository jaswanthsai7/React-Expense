import { useState } from "react";
import "./App.css";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [exp, setExp] = useState(expenses);
  
  const addExpense = (expense) => {
    let newData = [...exp];
    newData.push({
      id: expense.id,
      title: expense.title,
      amount: expense.amount,
      date: expense.date,
    });
    setExp(newData);
 
  };

  return (
    <div className="App">
      <header className="App-header">
        <NewExpense addExpense={addExpense} />
        <Expense exp={exp} />
      </header>
    </div>
  );
}

export default App;
