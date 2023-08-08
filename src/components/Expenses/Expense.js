import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem';
import './Expense.css';
import ExpensesFilter from './ExpensesFilter';

export default function Expense(props) {
let [datas,setDatas]=useState(props.exp);

const selectedYear=(year)=>{
  if(year==='All'){setDatas(props.exp)}else{
  console.log(Number(year))
  setDatas(props.exp)
  let da=[...props.exp]
 let data=da.filter(c=>Number(new Date(c.date).getFullYear())===Number(year))
setDatas(data)}
}

  return (
    <div className='expenses'>
      <ExpensesFilter selectedYear={selectedYear} />
      {datas.length===0 ? <p>No Data </p>:<ExpenseItem datas={datas}/>}
    </div>
  )
}
