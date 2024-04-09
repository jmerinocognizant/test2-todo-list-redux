import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { CompletedBtn, TodoAdd, TodoList } from '../../../../features/todo/components';
import configureMockStore from 'redux-mock-store';
import { selectTodos,selectEditable } from '../../../../features/todo/store/todoSlice';
import { useAppSelector } from '../../../../app/hooks';
import { store } from '../../../../app/store';
import { initialState, initialStateEmpty } from '../../../../features/todo/data/dataTodos';
import thunk from 'redux-thunk';

describe('Pruebas en <TodoList />', () => { 
    
    beforeEach( () => jest.clearAllMocks());

   //const mockStore = configureMockStore([]);
    
   // const {todos:returnTodos} = initialState;

    //const mockUseAppSelector =  jest.fn();
/*
    const mockUseAppSelector = jest.fn().mockReturnValueOnce(returnTodos).mockReturnValue(0);

    jest.mock('../../../../app/hooks', () =>({
        useAppSelector: mockUseAppSelector
    }));
*/
    
/*
    jest.mock('react-redux', () => ({
        useSelector: jest.fn().mockImplementation(selector => selector()),
      }));

    
    jest.mock('../../../../features/todo/store/todoSlice', () => ({
        selectTodos: jest.fn().mockReturnValue(todos),
        selectEditable: jest.fn().mockReturnValue(0),
    }));
*/

    test('debe de hacer match con el snapshot', () => {
        const middlewares = [thunk];
        const mockStore = configureMockStore(middlewares);
        const storeEmpty = mockStore({todo: initialState});
        const { container } = render(
            <Provider store={storeEmpty}>
                <TodoList />
            </Provider>
       );
       //screen.debug();
       expect( container ).toMatchSnapshot();
      
    });

    test('debe de mostrar un mensaje si la lista está vacia', () => {
        const middlewares = [thunk];
        const mockStore = configureMockStore(middlewares);
        const storeEmpty = mockStore({todo: initialStateEmpty});
        const noRecords = "No records";

        //console.log(storeEmpty.getState());
        
        const { container } = render(
            <Provider store={storeEmpty}>
                <TodoList />
            </Provider>
       );       
      
       //screen.debug();
       //console.log(storeEmpty);
       expect(screen.getByText(noRecords));
    });

    test('debe de mostrar los elementos de la lista', () => {
        const middlewares = [thunk];
        const mockStore = configureMockStore(middlewares);
        const storeLoaded = mockStore({todo: initialState});

        //console.log(storeEmpty.getState());
        const { container } = render(
            <Provider store={storeLoaded}>
                <TodoList />
            </Provider>
       );       
      
       //screen.debug();
       //console.log(storeEmpty);
       const todoItems = screen.getAllByLabelText('todo-item');
       //console.log(todoItems.length);
      expect(todoItems.length).toBe(initialState.todos.length);
    });

});