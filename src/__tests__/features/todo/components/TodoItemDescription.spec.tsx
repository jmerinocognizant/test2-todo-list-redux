import { fireEvent, render, screen } from '@testing-library/react';
import { TodoItemDescription } from '../../../../features/todo/components';

describe('Pruebas en <TodoItemDescription />', () => { 

    const onDoubleClickHandler = jest.fn();
    const description = "prueba todo";

    test('debe de hacer match con el snapshot', () => {
        const { container } = render(
            < TodoItemDescription description={description} onDoubleClick={onDoubleClickHandler}/>
       );
       expect( container ).toMatchSnapshot(); 
    });

    test('debe de contener el texto de la descripción', () => {
        render(
            < TodoItemDescription description={description} onDoubleClick={onDoubleClickHandler}/>
       );
       expect(screen.getByText(description)).toBeTruthy();
    });

    test('debe de realizar realizar la llamada a la función onDobleClick', () =>{
        const { container, getByText } = render(
            < TodoItemDescription description={description} onDoubleClick={onDoubleClickHandler}/>
       );

       fireEvent.doubleClick(screen.getByText(description));
       expect( onDoubleClickHandler ).toHaveBeenCalled();
    })

});