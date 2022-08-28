import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {

    //show message if nothing is found

    if (props.filteredExpenses.length === 0) {

        return (
            <p className="expenses-list__fallback" >No expenses found</p>
        );
    }

    //holds array of results in constant

    return (
        <ul className="expenses-list">
            {props.filteredExpenses.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))};
        </ul>
    )


}

export default ExpensesList;