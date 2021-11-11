import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    // console.log('Clicked!');
    // this.state.persons[0].name = 'Ragib'; <---- can't do this!!!
    setPersonsState({
      persons:[
        { name: 'Maximilian', age: 28 },
        { name: 'Manuel', age: 29 },
        { name: 'Steph', age: 26 }
      ],
    });
  };

  return (
    <div className="App">
      <p>Hi!</p>
      <button onClick={switchNameHandler}>Switch name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}>My hobbies: Gardening</Person>
    </div>
  );

}

export default app;




