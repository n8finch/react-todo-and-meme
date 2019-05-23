/*
In the previous iteration of this todo list app, we pulled in todos data from a JSON file and mapped over it to display the todo items.

Eventually we'll want to be able to modify the data, which will only happen if we've "loaded" the data in to the component's state

Challenge: Change the <App /> component into a stateful class component and load the imported `todosData` into state.
*/

import React, {Component} from "react";
import TodoItem from "./Components/Todoitem";
import todosData from "./Data/todos-data";

class App extends Component {

  constructor() {
    super()
    this.state = {
        todos: todosData
    }
  }

  render() {
    const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item}/>)
      
    return (
        <div className="todo-list">
            {todoItems}
        </div>
    )
  }
}

export default App