import React, {useState, ChangeEvent, FormEvent} from "react"
import {addTodo} from "./types";
import {Input, Button} from "./Style"

interface AddTodoFormProps {
    addTodo: addTodo;
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({addTodo}) => {
    const [newTodo, setNewTodo] = useState<string>("");


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value)
    }

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addTodo(newTodo)
        setNewTodo("");
    }
    console.log("newTodo", newTodo)

    return (
        <form>
            <Input type="text" value={newTodo} onChange={handleChange}/>
            <Button type="submit" onClick={handleSubmit}>Add Todo</Button>
        </form>
    )
}