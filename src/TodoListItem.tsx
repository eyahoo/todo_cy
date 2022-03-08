import React from "react"
import "./TodoListItem.css"
import {Todo, ToggleTodo} from "./types";
import {List, Checkbox, Label, Button} from "./Style";


interface TodoListItemProps {
    todo: Todo;
    toggleTodo: ToggleTodo;
    deleteTodo: ToggleTodo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({todo, toggleTodo, deleteTodo}) => {
    return <List>
        <Label complete={todo.complete ? "line-through" : ""}>
            <Checkbox type="checkbox" checked={todo.complete} onChange={() => toggleTodo(todo)}/>{todo.text}
            {
                todo.complete && <Button onClick={() => deleteTodo(todo)}>Delete Todo</Button>
            }
        </Label>
    </List>
}