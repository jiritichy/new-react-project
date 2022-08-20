import { useState } from "react"
import "./ExpenseForm.css"

function ExpenseForm() {

    const [expense, setExpense] = useState({
        title: "",
        amount: "",
        date: ""
    })

    console.log(expense);
    const titleHandler = (e) => {
        setExpense((prevState) => {
            return {
                ...prevState,
                title: e.target.value
            }
        })
    }

    const amountHandler = (e) => {

        setExpense((prevState) => {
            return {
                ...prevState,
                amount: e.target.value
            }
        })

    }


    const dateHandler = (e) => {
        setExpense((prevState) => {
            return {
                ...prevState,
                date: e.target.value
            }
        })
    }

    return (

        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>title</label>
                    <input type='text' onChange={titleHandler} />
                </div>
                <div className="new-expense__control">
                    <label>amount</label>
                    <input type='number' min="0.01" step="0.01" onChange={amountHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' min="2020-01-01" onChange={dateHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add</button>
            </div>
        </form>

    )
}


export default ExpenseForm;