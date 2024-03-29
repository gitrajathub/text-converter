import React from 'react';

function Alert(props) {

    let sentence = props.alertType ? props.alertType[0].toUpperCase() + props.alertType.substring(1) : "";

    return (
        <div class={`alert alert-${props.alertType} d-flex align-items-center px-2 py-2`} role="alert">
            <p>{sentence} {props.alertMessage}</p>
        </div>
    );
}

export default Alert;
