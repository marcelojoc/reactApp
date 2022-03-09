import React from 'react';
import './../css/TodoItem.css'

function TodoItem(props){


    // const onComplete = () =>{
    //     alert('completaste  el item '+ props.text);
    // }
    // const onDelete = () =>{
    //     alert('completaste  el item '+ props.text);
    // }

    return (

        <li className="TodoItem">
            <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`} onClick={props.onComplete} >
            √
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
            {props.text}
            </p>
            <span className="Icon Icon-delete" onClick={props.onDelete}>
           x
            </span>
        </li>
    );


}

export {TodoItem}