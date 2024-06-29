import './ExpenseItem.css'
import React,{useState} from 'react';
import ExpenseDate from './ExpenseDate'
import Card from '../UI/card'


function ExpenseItem(props)
{
    const [title,Settitle]=useState(props.title)
    const buttonclick=()=>{
        Settitle('new title')
    }

  return (
    <Card className='expense-item'>
        <ExpenseDate date={props.date}/>
        
        <div className='expense-item__location'>{props.location}</div>
        <div className='expense-item__description'>
            <h2>{title}</h2>
            <div className='expense-item__price'>${props.price}</div>

        </div>
        <button onClick={buttonclick}>change item</button>
    </Card>
    
  )
}
export default ExpenseItem