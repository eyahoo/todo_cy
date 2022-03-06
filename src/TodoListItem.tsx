import React from "react"
import "./TodoListItem.css"
import {Todo, ToggleTodo} from "./types";
import {List, Checkbox, Label} from "./Style";


interface TodoListItemProps {
    todo: Todo;
    toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({todo, toggleTodo}) => {
    return <List>
        <Label complete={todo.complete ? "line-through" : ""}>
            <Checkbox type="checkbox" checked={todo.complete} onChange={() => toggleTodo(todo)}/>{todo.text}
        </Label>
    </List>
}