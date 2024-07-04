import './ExpenseItem.css'
import React from 'react';
import ExpenseDate from './ExpenseDate'
import Card from '../UI/card'


function ExpenseItem(props)
{
    

  return (
    <li>
    <Card className='expense-item'>
        <ExpenseDate date={props.date}/>
        
        <div className='expense-item__location'>{props.location}</div>
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>${props.price}</div>

        </div>
        
    </Card>
    </li>
    
  )
}
export default ExpenseItem