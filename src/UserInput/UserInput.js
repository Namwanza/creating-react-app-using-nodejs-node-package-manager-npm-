import React from 'react';

const UserInput = (props) => {
    const mystyle = {
        border: '2px solid red'
    };
    return ( <input type='text' style={mystyle}
     onChange={props.changed} 
    value={props.currentName}/>);
};

export default UserInput;