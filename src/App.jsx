import { useState } from 'react'

import './index.css'
import { NewTodoForm } from "./NewTodoForm"
import { NewTodoList } from './NewTodoList'

export default function app() {
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ]
    })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }

        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className='header'>Todo List</h1>

      <NewTodoList />
    </>
  )
}