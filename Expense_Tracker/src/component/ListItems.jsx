import React from 'react'

function ListItems({expense, deleteExpense}) {

    if (!expense) return null;
    const {amount, description, id} = expense;

  return (
    <div className='bg-gray-600 py-2 px-4 rounded-xl font-medium flex items-center mb-3'>
        <p className='text-red-600'>{amount}.00 RS,</p>
        <p className='text-black ms-3'>{description}</p>
        <button 
            onClick={() => deleteExpense(id)}
            className='bg-red-500 text-white rounded-xl py-2 px-4 ml-auto'>
        DELETE
        </button>
    </div>
  )
}

export default ListItems