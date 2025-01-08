import { useEffect, useState } from 'react'
import { Todoprovider } from './context';
import TodoForm from './components/ToDoForm';
import TodoItem from './components/TodoItem';


function App() {

  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => {
      const updatedTodos = [{ id: Date.now(), ...todo }, ...prev];
      console.log("Updated Todos:", updatedTodos); // Debug log
      return updatedTodos;
    });
  }

  const updatedTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo: prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplate = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed}: prevTodo))
  }

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || []; 
    console.log("Loaded Todos from LocalStorage:", storedTodos);
    setTodos(storedTodos);
  }, [])

  useEffect(() => {
    console.log("Saving Todos to LocalStorage:", todos);
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <Todoprovider value={{ todos, addTodo, updatedTodo, toggleComplate, deleteTodo }}>
      <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
              <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
              <div className="mb-4">
                  <TodoForm /> 
              </div>
              <div className="flex flex-wrap gap-y-3">
                  {/*Loop and Add TodoItem here */}
                  {todos.map((todo) => (
                    <div key={todo.id}
                         className='w-full'

                    >
                      <TodoItem todo={todo} />
                    </div>
                  ))}
              </div>
          </div>
      </div>
    </Todoprovider>
  )
}

export default App
