import './expense.css'

function ExpenseItem(props)
{
  return (
    <div>
        <div className='expense-item'>{props.date.toISOString()}</div>
        <div className='expense-item__location'>{props.location}</div>
        <div className='expense-item__description'>
            <h1>{props.title}</h1>
            <div className='expense-item__price'>{props.price}</div>

        </div>
    </div>
    
  )
}
export default ExpenseItem