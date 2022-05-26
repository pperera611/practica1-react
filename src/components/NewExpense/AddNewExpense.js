const AddNewExpense = props => {

const addNewExpenseHandler = () => {
    props.onShowForm(true);
}

return (
        <div>    
            <button onClick={addNewExpenseHandler}>Add New Expense</button>
        </div>
        )

};
export default AddNewExpense;