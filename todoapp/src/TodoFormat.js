import React from 'react'

const TodoFormat = ({data, onDeleteTodo}) => {
  return (
    <div>
    <p>title: {data.title}</p>
    <p>todo: {data.todo}</p>
    <p>completed: {data.completed}</p>
    <button onClick ={() => onDeleteTodo(data)}>Delete</button>
    <hr/>
    </div>

  )
}

export default TodoFormat
