import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <p>This is realy working!!!</p>
      <Person name="Armen" age="33">My Hobbies: Racing</Person>
      <Person name="Armine" age="33" />
    </div>
  );
}

export default App;
