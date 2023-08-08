import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

export default function NewExpense(props) {
const onSaveData=(data)=>{
    const expenseData={
        ...data,
        id:Math.random().toString()
    };
    console.log(expenseData);
    props.addExpense(expenseData);
}

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveData={onSaveData}/>
    </div>
  )
}
