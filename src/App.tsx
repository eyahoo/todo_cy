import React, {useState} from 'react';
import {Todo, ToggleTodo} from "./types"
import {TodoList} from "./TodoList";
import {AddTodoForm} from "./AddTodoForm";
import {Container, Frame} from "./Style";

const initialTodos: Array<Todo> = []

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

    const deleteTodo = (deleteItem: Todo) => {
        deleteItem.text.trim() !== "" && setTodos(todos.filter(item => item.text !== deleteItem.text))
    }

    return (
        <React.Fragment>
            <Frame>
                <Container>
                    <h1>📚 To do List 📚</h1>
                </Container>
                <Container>
                    <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
                </Container>
                <Container>
                    <AddTodoForm addTodo={addTodo}/>
                </Container>
            </Frame>
        </React.Fragment>
    );
}

export default App;
