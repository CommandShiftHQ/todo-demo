import React from 'react';
import { useForm } from '../custom-hooks/useForm';

const TodoForm = ({ addTask }) => {
    const [input, setInput, resetInput] = useForm({ task: '' });

    const submitHandler = (event) => {
        event.preventDefault();
        addTask(input.task);
        resetInput();
    };

    return (
        <form onSubmit={submitHandler}>
            <input
                type="text"
                placeholder="Add a task..."
                name="task"
                value={input.task}
                onChange={setInput}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default TodoForm;
