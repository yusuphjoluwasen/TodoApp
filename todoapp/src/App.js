import React from 'react';
import './App.css';
import {todoArray} from './data.js'
import TodoList from './TodoList'
// import Reservation from './formtest'
import TodoForm from "./TodoForm"

class App extends React.Component {

  state = {
    data:todoArray,
    isData:false,
    text:"",
    todo:"",
    completed:false
  }


  onDeleteTodo = dataTobeDeleted => {
    const duplicatedData = [...this.state.data]
    console.log(dataTobeDeleted);
    const dataId = dataTobeDeleted.id
    const RemainingData = duplicatedData.filter(arrayData => arrayData.id !== dataId)
    this.setState({
      data:RemainingData
    });
  }

  onEnterInfo = output => {
    // const target = output.target
    // const value = target.type === 'checkbox' ? target.checked : target.value;
    const sola = output.target
    console.log(sola)
    // this.setState({
    //   [name]: value
    // });.
    //console.log(output);
  }






  render() {

    return(
      <div>

        <TodoForm onEnterInfo ={this.onEnterInfo}/>
        <TodoList data = {this.state.data } onDeleteTodo={this.onDeleteTodo} onEnterInfo={this.onEnterInfo}/>
      </div>
    )
  }
}

export default App;
