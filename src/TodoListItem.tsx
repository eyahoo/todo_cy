import React from "react"
import "./TodoListItem.css"
import {Todo, ToggleTodo} from "./types";
import {List, Input, Checkbox} from "./Style";


interface TodoListItemProps {
    todo: Todo;
    toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({todo, toggleTodo}) => {
    return <List>
        <label className={todo.complete ? "complete" : undefined}>
            <Checkbox type="checkbox" checked={todo.complete} onChange={() => toggleTodo(todo)}/>{todo.text}
        </label></List>
}