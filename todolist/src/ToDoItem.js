import React from 'react';

const ToDoItem = ({ index, title
                    , isCompleted
                    , onMarkAsCompleted }) => {
  return (
    <li className='list-group-item'>
      <h3>{title}</h3>
      <p className={ isCompleted ? "text-success" : "text-warning" }>{isCompleted ? 'Completed' : 'Pending'}</p>
      {
        !isCompleted && 
            <button type='button' className='btn btn-success'
                onClick={() => onMarkAsCompleted(index)}
            >
                Mark As Completed
            </button>
      }
    </li>
  );
};

export default ToDoItem;
