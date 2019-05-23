import React from 'react';
import './App.css';

// import TodoItem from './Components/Todoitem';
// import ContactCard from './Components/ContactCard';
import Joke from "./Components/Joke"
import jokesData from "./Data/jokes-data"


function App() {

  const jokeComponents = jokesData.map(joke => {
    return <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />
  })

  return (
    <div>
      {jokeComponents}
    </div>
  )
  
  // var styles = {
  //   color : "blue",
  //   backgroundColor : "pink"
  // };

  // return (
  //   <div className="App">
  //     <h1 style={styles} >Todos</h1>
  //     <ContactCard 
  //       name="Nate Finch"
  //       imgUrl="http://placekitten.com/300/200"
  //       phone="123-123-1234"
  //       email="cat@cats.com"
  //     />
  //   </div>
  // );
}

export default App;
