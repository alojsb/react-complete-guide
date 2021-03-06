import React from 'react';

import classes from './Person.module.css'

const person = (props) => {

    // // create fake error for demontration
    // const rnd = Math.random();
    // if (rnd > 0.7) {
    //     throw new Error('Something went wrong');
    // }

    console.log('[Person.js] rendering...');

    return (
        <div className={classes.Person}>
            <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old! </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    );
};

export default person;