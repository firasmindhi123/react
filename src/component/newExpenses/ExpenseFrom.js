import React, { useState } from "react";
import './Expenseform.css'

const ExpenseForm = (props) => {
 const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("")
  const [enteredDate, setEnteredDate] = useState("")
  const [enteredlocation, setEnteredlocation] = useState("")
  
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler=(e)=>{
    setEnteredAmount(e.target.value)
  }
  const dateChangeHandler=(e)=>{
    setEnteredDate(e.target.value)
  }
  const locationChangeHandler=(e)=>{
    setEnteredlocation(e.target.value)
  }
  const SubmitHandler=(e)=>{
    e.preventDefault()
    const objData={
        title:enteredTitle,
        price:enteredAmount,
        date:new Date(enteredDate),
        location:enteredlocation
      }
      props.onSaveExpenseData(objData)
      setEnteredTitle("")
      setEnteredAmount("")
      setEnteredDate("")
      setEnteredlocation("")
      
    }
    return (
        <form onSubmit={SubmitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label htmlFor="title">Title</label>
              <input type="text" id="title"  value={enteredTitle} onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
            <label htmlFor="location">location</label>
              <input type="text" id="title"  value={enteredlocation} onChange={locationChangeHandler} />
            </div>
            <div className="new-expense__control">
              <label htmlFor="amount">price</label>
              <input type="number" id="price" value={enteredAmount} onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                min="2023-01-01"
                max="2024-12-31"
                value={enteredDate}
                onChange={dateChangeHandler}
              />
            </div>
            </div>
      <div className="new-expense__actions">
        <button onClick={()=>{
          props.onCancel()
        }}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
       