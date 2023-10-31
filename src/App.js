import ExpenseItem from "./components/ExpenseItem";

function App() {

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      location:"Mumbai",
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, location:"Kolkata", date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      location:"Delhi",
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      location:"Kochi",
      date: new Date(2021, 5, 12),
    },
  ];
  
  return (
    <div>
      <h2>Expense Item</h2>
      {expenses.map((item) => {
        return <ExpenseItem title={item.title} amount={item.amount} date={item.date} location={item.location} />
      })}
      
    </div>
  );
}

export default App;
