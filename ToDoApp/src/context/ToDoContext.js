import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "ToDo Msg",
            completed: false
        }
    ],
    addTodo: (todo) => {},
    updatedTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplate: (id) => {}
})

export const useTodo = () => {
    return useContext(TodoContext);
}

export const Todoprovider = TodoContext.Provider