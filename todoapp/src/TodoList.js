import React from 'react'
import TodoFormat from "./TodoFormat"


const TodoList = ({data, onDeleteTodo, onEnterInfo}) => {

  const sola = data.map((member, index) => {
    return (
      <TodoFormat key={member.id} data={member} onDeleteTodo={onDeleteTodo}/>
    )
})

return (

  <div>
  <form>

  </form>
  {sola}
  </div>
);

}

export default TodoList
