import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

import { ToDoList } from './components/ToDoList';

/* -------------------------------------------------------------------------------------------------------------------------------------------- */

const KEY = "todoApp.todos";

/* -------------------------------------------------------------------------------------------------------------------------------------------- */

export function App() {

    const [todos, setTodos] = useState([{ id: 1, task: 'Tarea 1', completed: false }])
    const todoTaskRef = useRef();

    const toggleTodo = (id) => {
        const newTodos = [...todos];
        const todo = newTodos.find((todo) => todo.id === id);

        todo.completed = !todo.completed;
        setTodos(newTodos);
    }; 

    const handleTodosAdd = () => {
        const task = todoTaskRef.current.value;
        if (task === '') return;


        setTodos((prevTodos) => {
            return [... prevTodos, {id: 3, task, completed: false}]
        });


        todoTaskRef.current.value = null;
    };

    useEffect(() => {
        localStorage.setItem(KEY, JSON.stringify(todos));
    }, [todos]);


    /* -------------------------------------------------------------------------------------------------------------------------------------------- */

    return ( 
        <div>
            <ToDoList todos = {todos} toggleTodo = {toggleTodo}/>
            <input ref={todoTaskRef} type="text" placeholder= "Nueva Tarea"/>
            <button onClick={handleTodosAdd}> + </button>
            <button> - </button>
        </div>
    );

/* -------------------------------------------------------------------------------------------------------------------------------------------- */














};