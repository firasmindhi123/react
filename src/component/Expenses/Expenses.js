
import React,{useState} from 'react';
import './Expenses.css'
import Card from '../UI/card'
import FilterItem from "./FilterItem";
import ExpensesFilter from "./ExpensesFilter";
function Expenses(props)
{
  const [filteredYear, setFilteredYear] = useState("2023");

  const changeFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filterItem=props.expenses.filter((item)=>{
    return(item.date.getFullYear().toString()===filteredYear)
  })
  

  

    return(
    <Card className='expenses'>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={changeFilterHandler}
      />
     <FilterItem item={filterItem} />
    </Card>
    )
}
export default Expenses
