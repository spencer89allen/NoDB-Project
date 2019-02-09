import React from 'react';

export default function AddButton(props) {
    const { action, ...additionalProps } = props;

    return (

        <button onClick={props.action} {...additionalProps}>Add</button>
    )
}