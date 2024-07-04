import React,{useState} from "react";
import ExpenseForm from "./ExpenseFrom"
import "./newExpenses.css";

const NewExpense = (props) => {
  const [isEdit,setEdit]=useState(false)
    const saveExpenseHandler=(data)=>{
       const newdata={
        ...data,
        id:Math.random().toString()
       }
      props.onAppExpenseData(newdata)
      setEdit(false)


    }

  return (
    <div className="new-expense">
      {!isEdit && (<button onClick={()=>{
         setEdit(true)
      }}>AddExpense</button>)}
      {isEdit && ( <ExpenseForm onSaveExpenseData={saveExpenseHandler} onCancel={()=>{
        setEdit(false)
      }} />)}
     
    </div>
  );
};

export default NewExpense;