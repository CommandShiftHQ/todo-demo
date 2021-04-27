import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const API = 'https://jsonplaceholder.typicode.com';

function App() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`${API}/todos?userId=1`)
            .then((response) => response.json())
            .then((result) => setItems(result));
    }, []);

    const toggleItemState = (id) => {
        setItems((prev) => {
            return prev.map((item) => {
                if (id === item.id) {
                    return {
                        ...item,
                        completed: !item.completed,
                    };
                } else {
                    return item;
                }
            });
        });
    };

    const addTask = (task) => {
        fetch(`${API}/todos`, {
            method: 'POST',
            body: JSON.stringify({
                userId: 1,
                title: task,
            }),
        })
            .then((response) => response.json())
            .then((result) => {
                setItems((prev) => {
                    return [
                        ...prev,
                        {
                            id: result.id,
                            userId: 1,
                            title: task,
                            completed: false,
                        },
                    ];
                });
            });
    };

    return (
        <Router>
            <Navigation />
            <Switch>
                <Route exact path="/">
                    <TodoForm addTask={addTask} />
                    <TodoList items={items} toggleItemState={toggleItemState} />
                </Route>
                <Route path="/about" component={About} />
                <Route path="/contact">
                    <Contact />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
