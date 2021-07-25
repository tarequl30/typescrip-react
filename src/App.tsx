import React, { useState } from "react"
import "./App.css"
import { TodoList } from "./components/TodoList"
import { AddTodoForm } from "./components/Todos/AddTodoForm"

const initialTodos: Todo[] = [
  {
    text: "Walk the dog",
    complete: false,
  },
  {
    text: "Write app",
    complete: true,
  },
]

function App() {
  const [todos, setTodos] = useState(initialTodos)

  const toggleTodo: ToggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, complete: false }
    setTodos([...todos, newTodo])
  }

  return (
    <>
      <AddTodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </>
  )
}

export default App
