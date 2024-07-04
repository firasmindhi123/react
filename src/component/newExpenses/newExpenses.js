import React from "react";
import ExpenseForm from "./ExpenseFrom"
import "./newExpenses.css";

const NewExpense = (props) => {
    const saveExpenseHandler=(data)=>{
       const newdata={
        ...data,
        id:Math.random().toString()
       }
      return props.onAppExpenseData(newdata)

    }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseHandler} />
    </div>
  );
};

export default NewExpense;