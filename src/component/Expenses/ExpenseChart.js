import React from "react";
import Chart from "../Chart/Chart";
const ExpenseChart =(props)=>{
    
   return(
    
    <Chart chartdata={props.ExpenseData}/>
   
   ) 
}
export default ExpenseChart