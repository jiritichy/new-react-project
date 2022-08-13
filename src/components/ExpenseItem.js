import "./ExpenseItem.css"

const ExpenseItem = () => {

    const expenseDate = new Date(2022, 9, 1)
    const expenseTitle = "Insurance";
    const expenseAmount = 150;

    return (
        <div className="expense-item">
            <div>{expenseDate.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">{expenseAmount}</div>
            </div>
        </div>
    );
};

export default ExpenseItem;
