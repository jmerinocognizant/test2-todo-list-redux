import { Todo, TodoState } from "../interfaces/interfaces";

export const todoList = [{
    id: 1,
    description: 'Install NodeJS',
    completed: true,
    important: true,
},{
    id: 2,
    description: 'Install Angular CLI',
    completed: true,
    important: false,
},{
    id: 3,
    description: 'Create new app',
    completed: false,
    important: true,
}, {
    id: 4,
    description: 'Serve app',
    completed: false,
    important: false,
}, {
    id: 5,
    description: 'Develop app',
    completed: false,
    important: false,
}, {
    id: 6,
    description: 'Deploy app',
    completed: false,
    important: false,
}]


export const initialState: TodoState = {
    todos: todoList,
    edit: 0,
  };

export const initialStateEmpty: TodoState = {
    todos: [],
    edit: 0,
  };

export const newTodo: Todo = {
    id: 10000,
    description: "new TODO Pruebas",
    completed: false,
    important: false,
}  