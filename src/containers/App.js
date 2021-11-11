import React, { Component } from 'react';
import classes from './App.module.css';
//import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import PersonList from '../components/PersonList/PersonList';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {
  state = {
    persons: [
      {id: 'abc', name: 'Max', age: 28 },
      {id: 'def', name: 'Manu', age: 29 },
      {id: 'ghi', name: 'Stephanie', age: 26 },
      {id: 'bic', name: 'Archie', age: 36 },
      {id: 'giz', name: 'Gunther', age: 21 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // alternatively...
    //const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const timeToSwitch = this.state.showPersons;
    this.setState({showPersons: !timeToSwitch});
  }

  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = (
          <PersonList
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}/>
      );
    }

    return (

      <div className={classes.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}/>
         {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
  }
}

export default App;
