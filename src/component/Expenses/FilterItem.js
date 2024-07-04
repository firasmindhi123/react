import React from "react";
import ExpenseItem from "./Expenseitem";
const FilterItem=(props)=>{
   if(props.item.length===0)
    { 
        return(
         <h2> no content</h2>
        )

    }
    return( <ul>
       {
        props.item.map((expense) => 
            {
              return (
               
                <ExpenseItem
                  key={expense.id}
                  title={expense.title}
                  date={expense.date}
                  price={expense.price}
                />
                  
              )
 } )
        }
    </ul>)
   
}
export default FilterItem
