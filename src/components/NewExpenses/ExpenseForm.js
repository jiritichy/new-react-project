import { useState } from "react"
import "./ExpenseForm.css"

function ExpenseForm() {

    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')

    const titleHandler = (e) => {
        setTitle(e.target.value)
    }

    const amountHandler = (e) => {
        setAmount(e.target.value)
    }

    const dateHandler = (e) => {
        setDate(e.target.value)
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
