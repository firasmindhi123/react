import Expenses from "./component/Expenses/Expenses";
import React,{useState} from "react";
import NewExpense from "./component/newExpenses/newExpenses"
function App() {
  const expenses = [
    { id: "1", date: new Date(2024, 7, 15),location:"Bangalore", title: "Insurance", price: 100 },
    { id: "2", date: new Date(2024, 3, 25),location:"Delhi", title: "Book", price: 10 },
    { id: "3", date: new Date(2024, 10, 11),location:'Hyderabad', title: "Pen", price: 1 },
    { id: "4", date: new Date(2023, 1, 14),location:'Mumbai', title: "Laptop", price: 200 },
  ];
  const [enteredTitle, setEnteredTitle] = useState(expenses);
  
   
    const onAppSave=(data)=>{
      setEnteredTitle((expenses)=>{
       return  [data,...expenses]
      })
    }
  
  return (
    
    <div>
       <NewExpense onAppExpenseData={onAppSave}/>
       <Expenses expenses={enteredTitle} />
      
      
    </div>
  );
}

export default App;
