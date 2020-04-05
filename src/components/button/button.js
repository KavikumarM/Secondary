import React from 'react';

const button = props =>{
    return(
        <button type="button" className="btn btn-outline-primary" onClick={props.methodName}>{props.children}</button>
    );
}

export default button;