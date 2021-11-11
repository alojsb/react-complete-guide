import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ]
  }

  switchNameHandler = () => {
    // console.log('Clicked!');
    // this.state.persons[0].name = 'Ragib'; <---- can't do this!!!
    this.setState({
      persons:[
      { name: 'Maximilian', age: 28 },
      { name: 'Manuel', age: 29 },
      { name: 'Steph', age: 26 }
    ]})
  }

  render() {
    return (
      <div className="App">
        <p>Hi!</p>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>My hobbies: Gardening</Person>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
  }
}

export default App;
