import React, {useState} from 'react';
import {Todo, ToggleTodo} from "./types"
import {TodoList} from "./TodoList";
import {AddTodoForm} from "./AddTodoForm";

const initialTodos: Array<Todo> = [{text: "To Do List", complete: false}]

const App: React.FC = () => {
    const [todos, setTodos] = useState(initialTodos)

    const toggleTodo: ToggleTodo = (selectedTodo: Todo) => {
        const newTodos = todos.map(todo => {
            if (todo === selectedTodo) {
                return {
                    ...todo,
                    complete: !todo.complete
                }
            }


            return todo
        })
        setTodos(newTodos)
    }


    const addTodo = (newTodo: string) => {
        newTodo.trim() !== "" && setTodos([...todos, {text: newTodo, complete: false}])
    }

    return (
        <React.Fragment>
            <h1>To do List</h1>
            <TodoList todos={todos} toggleTodo={toggleTodo}/>
            <AddTodoForm addTodo={addTodo}/>

        </React.Fragment>
    );
}

export default App;
