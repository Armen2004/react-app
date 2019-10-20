import React from 'react';
import './App.css';
import Person from './Person/Person';

class App extends React.Component  {
  state = {
    persons: [
      {name: 'Anna', age: 5},
      {name: 'Davit', age: 1},
    ]
  }
  switchNameHandler = () => {
    this.setState({
      persons: [
        {name: 'Anna1', age: 5},
        {name: 'Davit1', age: 1},
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <p>This is realy working!!!</p>
        <Person name="Armen" age="33">My Hobbies: Racing</Person>
        <Person name="Armine" age="33" />
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
      </div>
    );
  }
}

export default App;
