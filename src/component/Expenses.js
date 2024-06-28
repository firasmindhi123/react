import ExpenseItem from "./Expenseitem";
import './Expenses.css'
function Expenses(props)
{
    return(
    <div className='expenses'>
      {
      props.expenses.map((expense,index)=>{
        return(<ExpenseItem key={expense.id}
          date={expense.date}
          location={expense.location}
          title={expense.title}
          price={expense.price}
          ></ExpenseItem>)
      })
     }
    </div>
    )
}
export default Expenses
