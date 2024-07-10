import React from "react";
import ChartBar from './chartBar';
import './Chart.css'
const Chart=(props)=>{
     const Expeses_array=props.chartdata.map((data)=>{
        return data.price
     })
     console.log(Expeses_array)
    const max_expensevalue=Math.max(...Expeses_array)
  
    
   const Expense_month=[{expenseMonth:'Jan',expensevalue:0},
    {expenseMonth:'Feb',expensevalue:0},
    {expenseMonth:'Mar',expensevalue:0},
    {expenseMonth:'Apr',expensevalue:0},
    {expenseMonth:'May',expensevalue:0},
    {expenseMonth:'Jun',expensevalue:0},
    {expenseMonth:'Jul',expensevalue:0},
    {expenseMonth:'Aug',expensevalue:0},
    {expenseMonth:'Sep',expensevalue:0},
    {expenseMonth:'Oct',expensevalue:0},
    {expenseMonth:'Nov',expensevalue:0},
    {expenseMonth:'Dec',expensevalue:0},
]

const Expenses=props.chartdata
console.log(Expenses)
for(let expense of Expenses)
    {

    Expense_month[expense.date.getMonth()].expensevalue+=expense.price

}
return(
    <div className="chart">
        {
            Expense_month.map((data)=>{
            
            return(
              <ChartBar key={Math.random()} label={data.expenseMonth} val={data.expensevalue} max={max_expensevalue}/>
  
            
              
            )
          })
        }
        
    </div>
)
}
export default Chart