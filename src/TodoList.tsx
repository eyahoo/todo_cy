import React from "react"
import {TodoListItem} from "./TodoListItem";
import {ToggleTodo} from "./types";
import {Todo} from "./types";


interface TodoListProps {
    todos:Array<Todo>;
    toggleTodo:ToggleTodo;
}


export const TodoList:React.FC<TodoListProps> = ({todos,toggleTodo}) =>{
    return <ul>
        {todos.map(todo=>{
        return <TodoListItem todo={todo} toggleTodo={toggleTodo}/>
        })}
    </ul>
}