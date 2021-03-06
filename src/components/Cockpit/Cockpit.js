import React from 'react';

import classes from './Cockpit.module.css';

// functional component
const cockpit = (props) => {

    const assignedClasses = [];
    let buttonClass = '';
    if (props.showPersons) {
        buttonClass = classes.Red;
    }

    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red);  // classes = ['red']
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>The second paragraph!</p>
            <button
            className={buttonClass}
            onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

export default cockpit;