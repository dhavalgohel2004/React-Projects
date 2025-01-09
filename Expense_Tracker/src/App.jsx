import { useState } from 'react'
import Form from './component/Form'
import ExpenseList from './component/ExpenseList'

function App() {
  const [expenses, setExpenses] = useState(() => {
    const storedExpenses = localStorage.getItem('expenses');
    return storedExpenses ? JSON.parse(storedExpenses) : [];
  });

  const [totalExpense, setTotalExpense] = useState(() => {
    const storedTotal = localStorage.getItem('totalExpense');
    return storedTotal ? JSON.parse(storedTotal) : 0;
  });

  const addExpense = (newExpense) => {
    const updateExpenses = [...expenses, newExpense];
    setExpenses(updateExpenses);

    const updatedTotalExpense = updateExpenses.reduce((sum, item) => sum + item.amount, 0);
    setTotalExpense(updatedTotalExpense);

    localStorage.setItem('expenses', JSON.stringify(updateExpenses));
    localStorage.setItem('totalExpense', JSON.stringify(updatedTotalExpense));
  }

  const deleteExpense = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);

    const updatedTotalExpense = updatedExpenses.reduce((sum, item) => sum + item.amount, 0);
    setTotalExpense(updatedTotalExpense);

    localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
    localStorage.setItem('totalExpense', JSON.stringify(updatedTotalExpense));
  }

  return (
    <div className='mt-10 bg-gray-600 py-7 rounded-xl px-4'>
      <h1 className='font-bold text-3xl text-center mb-4'>Expense Tracker</h1>
      <Form addExpense={addExpense} />
      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} totalExpense={totalExpense} />
    </div>
  )
}

export default App
