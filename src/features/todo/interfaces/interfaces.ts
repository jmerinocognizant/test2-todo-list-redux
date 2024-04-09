export interface Todo {
    id: number;
    description: string;
    completed: boolean;
    important: boolean;
}

export interface TodoState {
    todos: Todo[],
    edit?: number,
}