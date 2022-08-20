import './App.css';
import "./components/Expenses/expenses.css"
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';

function App() {

  const expenses = [
    { id: "1", title: "Insurace", amount: 150, date: new Date(2022, 9, 3) },
    { id: "2", title: "Food", amount: 180, date: new Date(2022, 9, 2) },
    { id: "3", title: "Beer", amount: 50, date: new Date(2022, 9, 1) }
  ]

  //passing expense from child component via pointer
  const addExpenseHandler = (expense) => {
    console.log(expense)
  }

  return (

    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>

  );
}

export default App;
