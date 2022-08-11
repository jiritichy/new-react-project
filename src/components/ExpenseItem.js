import "./ExpenseItem.css"

const ExpenseItem = () => {
    return (
        <div className="expense-item">
            <div>August 7th, 2022</div>
            <div className="expense-item__description">
                <h2>Phone Bill</h2>
                <div className="expense-item__price">725CZK</div>
            </div>
        </div>
    );
};

export default ExpenseItem;
