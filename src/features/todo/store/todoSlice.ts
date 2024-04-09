import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState} from '../../../app/store';
import { todoList } from '../data/dataTodos';
import { Todo, TodoState } from '../interfaces/interfaces';

const initialState: TodoState = {
  todos: todoList,
  edit: 0,
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter(item => item.id !== action.payload);
    },
    updateTodo: (state, action: PayloadAction<Todo>) => {
      const updatedTodo = action.payload;
      state.todos = state.todos.map(item => { 
        if(item.id === updatedTodo.id){
          return updatedTodo;
        }
        return item;
      });
    },
    setEditable: (state, action: PayloadAction<number>) => {
      state.edit = action.payload;
    },
  },

});

export const selectTodos = (state: RootState) => state.todo.todos;
export const selectEditable = (state: RootState) => state.todo.edit;

export const { addTodo, removeTodo, updateTodo, setEditable } = todoSlice.actions;

export default todoSlice.reducer;
