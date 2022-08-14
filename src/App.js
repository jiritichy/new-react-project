import './App.css';
import "./components/expenses.css"
import Expenses from './components/Expenses';

function App() {

  const expenses = [
    { id: "1", title: "Insurace", amount: 150, date: new Date(2022, 9, 3) },
    { id: "2", title: "Food", amount: 180, date: new Date(2022, 9, 2) },
    { id: "3", title: "Beer", amount: 50, date: new Date(2022, 9, 1) }
  ]

  return (

    <Expenses expenses={expenses} />

  );
}

export default App;
