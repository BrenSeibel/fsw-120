import React from 'react';

function Listname (props) {
    return (
        <div>
            <ol>
            {props.text.map(item => 
            <li key={item}>{item}</li>)}
            </ol>
                 
        </div>
    )
}

export default Listname 