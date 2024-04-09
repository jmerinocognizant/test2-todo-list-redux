import { fireEvent, render, screen } from '@testing-library/react';
import { initialState, newTodo } from '../../../../features/todo/data/dataTodos';
import { todoSlice, addTodo, removeTodo, updateTodo, setEditable } from '../../../../features/todo/store/todoSlice';

describe('Pruebas en todoSlice', () => { 

    test('debe de regreser el estado inicial', () => {
        //console.log(todoSlice);
        expect( todoSlice.name).toBe('todo');

        const state = todoSlice.reducer( initialState, {type:''});
        //console.log(state);

        expect( state ).toEqual( initialState );
    });

    test('debe de añadir un TODO', () => {
        //console.log(addTodo(newTodo));
        const state = todoSlice.reducer( initialState, addTodo(newTodo));
        //console.log(initialState.todos.length);
        //console.log(state.todos.length);
        expect(state.todos.length).toBe(initialState.todos.length + 1);

    });

    test('debe de eliminar un TODO', () => {
        const idToRemove = initialState.todos[0].id;
        const state = todoSlice.reducer( initialState, removeTodo(idToRemove));
        expect(state.todos.length).toBe(initialState.todos.length - 1);
    });

    test('debe de modificar un TODO', () => {
        const todoInitial = initialState.todos[0];
        const todoUpdated = {...newTodo,
                            id:todoInitial.id};

        const state = todoSlice.reducer( initialState, updateTodo(todoUpdated));
        expect(state.todos.length).toBe(initialState.todos.length);
        expect(todoUpdated).toEqual(state.todos[0]);
    });

    test('debe de cambiar el id del todo en edición', () => {
        const idEditable = 1000;
        const state = todoSlice.reducer( initialState, setEditable(idEditable));
        expect(state.edit).toBe(idEditable)
    });


});