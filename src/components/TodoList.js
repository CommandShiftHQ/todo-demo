import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ items, toggleItemState }) => {
    return (
        <ul>
            {items.map((item) => (
                <TodoItem
                    key={item.id}
                    item={item}
                    toggleItemState={toggleItemState}
                />
            ))}
        </ul>
    );
};

export default TodoList;
