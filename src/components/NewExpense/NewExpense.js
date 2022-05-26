import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import React, {useState} from 'react';
import AddNewExpense from "./AddNewExpense";


const NewExpense = (props) => {

    //dentro del componente newExpense se arma una funcion
    //que sirve para tomar los datos que vienen del componente
    //hijo ExpenseForm, se define una propiedad onSaveExpenseData
    //y se pone en el return del componenente...
    
    const [formSwhow, setFormShow] = useState(false);

    const showMeHandler = (valor) => {
        setFormShow(valor);
    };
    
    const savExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()

        }
        props.onAddExpense(expenseData);
    }

    if (formSwhow) {
    
        return <div className = "new-expense">
        <ExpenseForm onShowForm={showMeHandler} onSaveExpenseData ={savExpenseDataHandler}/>
    </div>
    }
    else{ return <div className = "new-expense">
        <AddNewExpense onShowForm ={showMeHandler}/>
    </div>}

};

export default NewExpense;