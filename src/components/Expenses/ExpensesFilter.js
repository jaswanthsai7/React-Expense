import React from 'react'
import './ExpensesFilter.css'

export default function ExpensesFilter(props) {


  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={(e)=>{let year= e.target.value;props.selectedYear(year);console.log(year)}}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
          <option value='All'>All</option>
        </select>
      </div>
    </div>
  )
}
