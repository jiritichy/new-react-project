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
            <ExpenseItem title={props.expenses[0].title} amount={props.expenses[0].amount} date={props.expenses[0].date} />
            <ExpenseItem title={props.expenses[1].title} amount={props.expenses[1].amount} date={props.expenses[1].date} />
            <ExpenseItem title={props.expenses[2].title} amount={props.expenses[2].amount} date={props.expenses[2].date} />
        </Card>

    );
}

export default Expenses;