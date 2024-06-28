import './ExpenseDate.css'
const months=['january','February','March','April','May','June','July','August','September','October','November','December']
function ExpenseDate(props)
{
    const month=months[props.date.getMonth()]
    const year=props.date.getFullYear()
    const date=props.date.getDate()
    return(
        <div className='expense-date'>
          <div className='expense-date__month'>{month}</div>
            <div className='expense-date__yea'>{year}</div>
            <div className='expense-date__day'>{date}</div>
        </div>
    )}
export default ExpenseDate
