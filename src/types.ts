export type Todo = {
    text: string;
    complete: boolean;
};

export type ToggleTodo = (selectedTodo: Todo) => void

export type addTodo = (newTodo: string) => void