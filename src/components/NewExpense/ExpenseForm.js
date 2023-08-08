import React, { useState } from "react";
import "./ExpenseForm.css";
export default function ExpenseForm(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [access, setAccess] = useState(0);

  const submissionHandler = (e) => {
    e.preventDefault();
    const data = {
      title: title,
      amount: Number(amount),
      date: new Date(date),
    };
    props.onSaveData(data);
    console.log(data);
    setTitle("");
    setAmount("");
    setDate("");
  };
  return (
    <>
      {access === 0 ? (
        <div className="center">
          <button className="btn"
            onClick={() => {
              setAccess(1);
            }}
          >
            Add Expense
          </button>
        </div>
      ) : (
        <form onSubmit={(e) => submissionHandler(e)}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
                type="text"
                name="title"
                value={title}
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
              />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                name="amount"
                value={amount}
                onChange={(event) => {
                  setAmount(event.target.value);
                }}
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                min="2019-01-01"
                max="2023-08-07"
                name="date"
                value={date}
                onChange={(event) => {
                  setDate(event.target.value);
                }}
              />
            </div>
            <div className="new-expense__actions">
              <button
                onClick={() => {
                  setAccess(0);
                }}
              >
                Cancel
              </button>
              <button type="submit">Add Expense</button>
            </div>
          </div>
        </form>
      )}
    </>
  );
}
