import React from 'react';

const TodoItem = ({ item, toggleItemState }) => {
    return (
        <li>
            <input
                id={item.id}
                type="checkbox"
                checked={item.completed}
                onChange={() => toggleItemState(item.id)}
            />
            <label htmlFor={item.id}>{item.title}</label>
        </li>
    );
};

export default TodoItem;
