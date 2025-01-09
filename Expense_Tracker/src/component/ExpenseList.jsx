import React from 'react'
import ListItems from './ListItems'

function ExpenseList({expenses, deleteExpense, totalExpense}) {
  return (
    <div className='bg-black py-8 px-4 mt-10 rounded-xl'>
        <div className="text-white text-xl mb-4">
          <h2>Total Expense: {totalExpense} RS</h2>
        </div>
        <div
          className="max-h-80 overflow-y-auto scrollbar-hidden" 
        >
        {expenses && expenses.length > 0 ? (
          expenses.map((expense) => (
              <ListItems 
                  key={expense.id}
                  expense={expense}
                  deleteExpense={deleteExpense}
              />
          ))
        ) : (
          <p className="text-white">No expenses added yet!</p>
        )}
      </div>
    </div>
  )
}

export default ExpenseList