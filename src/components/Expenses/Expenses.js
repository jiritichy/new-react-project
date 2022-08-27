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
    //filters passed expenses with condition -> selected year == expense.date
    const filteredExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear() == filteredYear;
    })


    return (

        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onFilterSelect={filterNewSelect} />
            {
                filteredExpenses.map((expense) => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)
            }

        </Card>

    );
}

export default Expenses;