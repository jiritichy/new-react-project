import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./ExpensesFilter.css"
import { useState } from "react";

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2022')

    const filterNewSelect = (year) => {
        setFilteredYear(year)
    }
    //logs the selected year
    console.log(filteredYear);

    return (

        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onFilterSelect={filterNewSelect} />
            {
                props.expenses.map((expense) => <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />)
            }

        </Card>

    );
}

export default Expenses;