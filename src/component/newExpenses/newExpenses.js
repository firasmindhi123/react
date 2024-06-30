import React from "react";
import ExpenseForm from "./ExpenseFrom"
import "./newExpenses.css";

const NewExpense = () => {
  return (
    <div className="new-expense">
      <ExpenseForm />
    </div>
  );
};

export default NewExpense;