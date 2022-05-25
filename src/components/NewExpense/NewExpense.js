import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";


const NewExpense = (props) => {

    //dentro del componente newExpense se arma una funcion
    //que sirve para tomar los datos que vienen del componente
    //hijo ExpenseForm, se define una propiedad onSaveExpenseData
    //y se pone en el return del componenente...
    const savExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()

        }
        props.onAddExpense(expenseData);
    }

    return <div className = "new-expense">
        <ExpenseForm onSaveExpenseData ={savExpenseDataHandler}/>
    </div>

};

export default NewExpense;