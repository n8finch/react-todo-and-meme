/**
 * Let's make it so our checkbox can actually mark our todo as complete or incomplete!
 * This challenge is a little more involved than some of the past ones. Check the comments 
 * in the code for some help on accomplishing this one
 * 
 * Challenge: 
 * 1. Create an event handler in the App component for when the checkbox is clicked (which is an `onChange` event)
 *    a. This method will be the trickest part. Check the comments in the stubbed-out method below for some pseudocode to help guide you through this part
 * 2. Pass the method down to the TodoItem component
 * 3. In the TodoItem component, make it so when the `onChange` event happens, it calls the `handleChange` method and passes the id of the todo into the function
 */

import React from "react"
import TodoItem from "./Components/Todoitem"
import todosData from "./Data/todos-data"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoading: false,
            todos: todosData,
            swapi: {}
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        this.setState({
            isLoading: true
        });
        fetch("https://swapi.co/api/people/4")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    isLoading: false,
                    swapi: data
                });
            });
    }
    
    handleChange(id) {
        // Update state so that the item with the given id flips `completed` from false to true (or vise versa)
        // Remember not to modify prevState directly, but instead to return a new version of state with the change you want included in that update. (Think how you might use the `.map` method to do this)
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map( todo => {
                if ( todo.id === id ) {
                    todo.completed = !todo.completed;
                }
                return todo;
            });

            return {
                todos: updatedTodos
            }
        });
    }
    
    render() {
        const todoItems = this.state.todos.map(item => <TodoItem handleChange={this.handleChange} key={item.id} item={item}/>)
        
        let heading = (this.state.isLoading) ? <p>Loading...</p> : this.state.swapi.name + "'s Todo List";

        return (
            <div>
                <h1 style={{textAlign: "center"}}>{heading}</h1>
                <div className="todo-list">
                    {todoItems}
                </div>
            </div>
        )    
    }
}

export default App