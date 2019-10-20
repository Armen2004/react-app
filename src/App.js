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
  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: 'Anna1', age: 5},
        {name: newName, age: 1},
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Anna1', age: 6},
        {name: event.target.value, age: 2},
      ]
    })
  }

  render() {
    const style = {
      backgroudColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hello</h1>
        <p>This is realy working!!!</p>
        <Person name="Armen" age="33">My Hobbies: Racing</Person>
        <Person name="Armine" age="33" />
        <button 
        style={style}
        onClick={this.switchNameHandler.bind(this, 'aaaaa!!!')}
        >Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, 'aaaaa!!!')}
        changed={this.nameChangeHandler} 
        />
      </div>
    );
  }
}

export default App;
