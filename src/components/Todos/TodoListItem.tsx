import React from "react"
interface Props {
  todo: Todo
  toggleTodo: ToggleTodo
}

export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo }) => {
  return (
    <div className="d-flex justify-content-center">
      <li>
        <label
          style={{ textDecoration: todo.complete ? "line-through" : undefined }}
        >
          <input
            type="checkbox"
            checked={todo.complete}
            onClick={() => {
              toggleTodo(todo)
            }}
          />{" "}
          {todo.text}
        </label>
      </li>
    </div>
  )
}
