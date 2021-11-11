import React from 'react';

import Person from './Person/Person';

// a functional component for presentational purposes
// a opposed to a class based component for state management
const personList = (props) => {
    console.log('[PersonList.js] rendering...');
    return props.persons.map((person, index) => {
        return (
            <Person
                click={() => props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => props.changed(event, person.id)}
            />
        );
    });
};

export default personList;