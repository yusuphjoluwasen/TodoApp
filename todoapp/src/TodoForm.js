import React from 'react'

const TodoForm = ({onEnterInfo}) => {

  return (
    <div>
    <form>
      <label>Title:
        <input type="title" placeholder="enter a name" onChange={onEnterInfo}/></label><br/><br/>
      <label>Enter a text:
        <textarea type="todo" placeholder="enter a text" onChange={onEnterInfo}></textarea>
      </label><br/><br/>
    </form>
    </div>
  )
}

export default TodoForm
