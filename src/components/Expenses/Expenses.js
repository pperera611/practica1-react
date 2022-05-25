import  "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import React, {useState} from 'react';
import Card from "../UI/Card";

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
        
        {filteredExpenses.map(e => (
          <ExpenseItem 
            key ={e.id}
            date = {e.date}
            amount = {e.amount}
            title = {e.title} 
            />
        ))
        }
        
        </Card>
      
      )

    
}
export default Expenses;

