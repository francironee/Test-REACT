import React from "react";
import { useState } from "react";
import { useRef } from "react";

import { ToDoList } from './components/ToDoList';



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


    return ( 
        <div>
            <ToDoList todos = {todos} toggleTodo = {toggleTodo}/>
            <input ref={todoTaskRef} type="text" placeholder= "Nueva Tarea"/>
            <button onClick={handleTodosAdd}> + </button>
            <button> - </button>
        </div>
    );
};