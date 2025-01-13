import React, { useState } from 'react'
import {useDispatch} from 'react-redux';  
import {addTodo} from '../features/todo/todoSlice' 

function AddTodo() {

    const [input, setInput] = useState('');
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input))
        setInput('')
    }


  return (
        <form className="flex gap-2 mb-4" onSubmit={addTodoHandler}>
            <input
                type="text"
                placeholder="Write Todo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 outline-none duration-150 bg-gray-100 py-1.5 shadow-sm"
            />
            <button
                type="submit"
                className="rounded-lg px-4 py-1.5 bg-green-600 text-white hover:bg-green-700 duration-150 shadow-md"
            >
                Add
            </button>
        </form>
  )
}

export default AddTodo