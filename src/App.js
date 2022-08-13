import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {

  const expenses = [
    { id: "1", title: "Insurace", amount: 150, date: new Date(2022, 9, 3) },
    { id: "2", title: "Food", amount: 180, date: new Date(2022, 9, 2) },
    { id: "3", title: "Beer", amount: 50, date: new Date(2022, 9, 1) }
  ]

  return (
    <>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
    </>

  );
}

export default App;
