import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { TodoItem } from '../../../../features/todo/components';

import configureMockStore from 'redux-mock-store';
import { initialState, initialStateEmpty, newTodo } from '../../../../features/todo/data/dataTodos';

describe('Pruebas en <TodoItem />', () => { 

    const mockStore = configureMockStore([]);

    //const store = mockStore(initialState);
    //beforeEach( () => jest.clearAllMocks());
    
    test('debe de hacer llamada al action removeTodo', () => {
        const store = mockStore(initialState);
        render(<Provider store={store}>
                < TodoItem todo={newTodo} editable={false} />
            </Provider>
       );
        //screen.debug();

        const button = screen.getByRole('button',{name: 'btn-remove'})   
        fireEvent.click(button);
        //console.log(store.getActions());
        
        const actions = store.getActions();
        expect(actions.length).toBe(1);
        
        expect(actions[0]).toEqual({"payload": 10000, "type": "todo/removeTodo"});

    });

    test('debe de hacer llamada al action updateTodo al pulsar botón completado', () => {
        const store = mockStore(initialState);
        render(<Provider store={store}>
                < TodoItem todo={newTodo} editable={false} />
            </Provider>
       );
        //screen.debug();

        // const button = screen.getByRole('button',{name: 'btn-completed'})   
        // fireEvent.click(button);
        //console.log(store.getActions());
        const button = screen.getAllByRole('button',{name: 'btn-todo'});        
        fireEvent.click(button[0]);

        const actions = store.getActions();
       // expect(actions.length).toBe(1);
        
        expect(actions[0]).toEqual( {
            type: 'todo/updateTodo',
            payload: {
              id: 10000,
              description: 'new TODO Pruebas',
              completed: true,
              important: false
            }
          });

        //console.log(store.getState());
    });

    test('debe de hacer llamada al action updateTodo al pulsar botón important', () => {
        const store = mockStore(initialState);
        render(<Provider store={store}>
                < TodoItem todo={newTodo} editable={false} />
            </Provider>
       );
        //screen.debug();

        // const button = screen.getByRole('button',{name: 'btn-important'})   
        // fireEvent.click(button);
        //console.log(store.getActions());
        const button = screen.getAllByRole('button',{name: 'btn-todo'});        
        fireEvent.click(button[1]);

        const actions = store.getActions();
       // expect(actions.length).toBe(1);
        
        expect(actions[0]).toEqual(  {
            type: 'todo/updateTodo',
            payload: {
              id: 10000,
              description: 'new TODO Pruebas',
              completed: false,
              important: true
            }
          });

        //console.log(store.getState());
    });

    test('debe de hacer llamada al action updateTodo al pulsar botón save', () => {
        const store = mockStore(initialState);
        render(<Provider store={store}>
                < TodoItem todo={newTodo} editable={true} />
            </Provider>
       );
        

        const inputValue = "cambio contenido descripción TODO"; 
        const button = screen.getByRole('button',{name: 'btn-save'});
        const input = screen.getByRole('textbox') as HTMLInputElement;

        fireEvent.input(input,{target: {value: inputValue}});
        fireEvent.click(button);

        //console.log(store.getActions());
        
        const actions = store.getActions();
        expect(actions.length).toBe(2);
        
       //screen.debug();

       
        expect(actions[0]).toEqual(   {
            type: 'todo/updateTodo',
            payload: {
              id: 10000,
              description: 'cambio contenido descripción TODO',
              completed: false,
              important: false
            }
          });

          expect(actions[1]).toEqual({ type: 'todo/setEditable', payload: 0 });

        //console.log(store.getState());
    });

/*
    test('prueba de carga vacia en el store', () => {
      const store = mockStore(initialState);
      render(<Provider store={store}>
              < TodoItem todo={newTodo} editable={true} />
          </Provider>
     );
      
      console.log(store.getState());
  });
*/

});