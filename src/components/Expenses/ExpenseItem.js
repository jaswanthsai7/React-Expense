import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card.js";

export default function ExpenseItem(props) {

  return props.datas.map((c,i) => {
    return (
   
        <Card key={i} className="expense-item">
          <ExpenseDate date={c.date}/>
          <div className="expense-item__description">
            <h2>{c.title}</h2>
            <div className="expense-item__price">{c.amount}</div>
          </div>
        </Card>

    );
  });
  
}
