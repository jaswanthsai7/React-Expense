import React from 'react'
import './ExpenseDate.css'
export default function ExpenseDate(props) {
  return (
    <div className='expense-date'>

            <div className='expense-date__month'>{props.date.toLocaleString("en-us", { month: "long" })}</div>
            <div className='expense-date__year'>{props.date.getFullYear()}</div>
            <div className='expense-date__day'> {props.date.toLocaleString("en-us", { day: "2-digit" })}</div>

    </div>
  )
}
