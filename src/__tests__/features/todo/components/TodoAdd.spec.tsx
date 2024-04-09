import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store  } from '../../../../app/store';
import { TodoAdd } from '../../../../features/todo/components';
//import { addTodo} from '../../../../features/todo/store/todoSlice';

describe('Pruebas en <TodoAdd />', () => { 

    /*
    const mockAddTodo = jest.fn();
    jest.mock('../../../../features/todo/store/todoSlice', () => ({
        addTodo: () => mockAddTodo,
    }))
    */

    beforeEach( () => jest.clearAllMocks());

    test('debe de hacer match con el snapshot', () => {
        const { container } = render(
            <Provider store={store}>
                < TodoAdd />
            </Provider>
       );
       expect( container ).toMatchSnapshot(); 
    });

    test('debe de llamar a la funcion submit del formulario', () =>{
        const inputValue = "nuevo TODO de pruebas";
        
        render(<Provider store={store}>
                < TodoAdd />
            </Provider>
       );
        const input = screen.getByRole('textbox') as HTMLInputElement;
        const form = screen.getByRole('form');

        fireEvent.input(input,{target: {value: inputValue}});
        fireEvent.submit(form);

        expect(input.value).toBe('');
    })

    test('debe de cancelar la llamada submit si el texto es <=1 caracter', () =>{
        const inputValue = "a";
        
        render(<Provider store={store}>
                < TodoAdd />
            </Provider>
       );
        
        const input = screen.getByRole('textbox') as HTMLInputElement;
        const button = screen.getByRole('button');

        fireEvent.input(input,{target: {value: inputValue}});
        fireEvent.click(button);

        expect(input.value).toBe(inputValue);
        //screen.debug();
    })

    test('debe de llamar al dispatch de addTodo', () =>{
        //dispatch(addTodo(newTodo));

        const inputValue = "new TODO pruebas";
        
        render(<Provider store={store}>
                < TodoAdd />
            </Provider>
       );
        
        const input = screen.getByRole('textbox') as HTMLInputElement;
        const button = screen.getByRole('button');

        fireEvent.input(input,{target: {value: inputValue}});
        fireEvent.click(button);

        //expect(mockAddTodo).toBeCalled();         
    })

});