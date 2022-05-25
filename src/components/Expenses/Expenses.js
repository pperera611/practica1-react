import  "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import React, {useState} from 'react';
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";

function Expenses(props){
        
  const lista = props.items;  
  
  const [yearSelected, setYearSelected] = useState("2020");
  
  const getYearSelected = (year) => {
    //actualizar estado
    setYearSelected(year);
  }
  const filteredExpenses = lista.filter(expense => { 
    return expense.date.getFullYear() === parseInt(yearSelected)
  });
    
 
  
  return (
                   
      <Card className="expenses">
        <ExpensesFilter 
        selected ={yearSelected} 
        onChangeFilter ={getYearSelected}/>
        <ExpensesList items = {filteredExpenses}/>
        
        </Card>
      
      )

    
}
export default Expenses;

