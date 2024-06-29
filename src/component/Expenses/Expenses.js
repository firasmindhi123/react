import ExpenseItem from "./Expenseitem";
import React from 'react';
import './Expenses.css'
import Card from '../UI/card'
function Expenses(props)
{
    return(
    <Card className='expenses'>
      {
      props.expenses.map((expense,index)=>{
        return(<ExpenseItem key={expense.id}
          date={expense.date}
          location={expense.location}
          title={expense.title}
          price={expense.price}
          />)
      })
     }
    </Card>
    )
}
export default Expenses
