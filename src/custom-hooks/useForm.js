import { useState } from 'react';

export const useForm = (initalState) => {
    const [input, setInput] = useState(initalState);
    const changeHandler = (event) => {
        setInput((prev) => {
            return {
                ...prev,
                [event.target.name]: event.target.value,
            };
        });
    };
    const resetHandler = () => {
        setInput(initalState);
    };

    return [input, changeHandler, resetHandler];
};
