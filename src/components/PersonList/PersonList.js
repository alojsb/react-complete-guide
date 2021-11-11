import React, {Component} from 'react';

import Person from './Person/Person';

class PersonList extends Component {

    render(){
        console.log('[PersonList.js] rendering...');
        return this.props.persons.map((person, index) => {
            return (
                <Person
                    click={() => this.props.clicked(index)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    changed={(event) => this.props.changed(event, person.id)}
                />
            );
        });
    }
};

export default PersonList;