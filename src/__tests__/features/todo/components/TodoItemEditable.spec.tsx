import { fireEvent, render, screen } from '@testing-library/react';
import { TodoItemEditable } from '../../../../features/todo/components/TodoItemEditable';

describe('Pruebas en <TodoItemEditable />', () => { 

    const onSaveClick = jest.fn();
    const description = "prueba todo";

    test('debe de hacer match con el snapshot', () => {
        const { container } = render(
            < TodoItemEditable description={description} onSaveClick={onSaveClick}/>
       );
       expect( container ).toMatchSnapshot(); 
    });

    test('debe de mostrar un input con el texto de la descripción', () =>{
        render(
            < TodoItemEditable description={description} onSaveClick={onSaveClick}/>
       );
        expect(screen.getByRole('textbox')).toHaveValue(description);
    })

    test('debe de cambiar el valor de la caja de texto', () =>{
        render(
            < TodoItemEditable description={description} onSaveClick={onSaveClick}/>
        );
        const input = screen.getByRole('textbox');
        const newTextValue = "nueva descripción de TODO";

        expect(screen.getByRole('textbox')).toHaveValue(description);
        fireEvent.input( input, {target: {value: newTextValue}});
        expect(screen.getByRole('textbox')).toHaveValue(newTextValue);

    })

    test('debe de desactivar el botón de enviar si el texto es <=1 caracter', () =>{
        render(
            < TodoItemEditable description={description} onSaveClick={onSaveClick}/>
       );

       const input = screen.getByRole('textbox');
       const saveButton = screen.getByRole('button');
       const newTextValue = "a";

       fireEvent.input( input, {target: {value: newTextValue}});
       expect(screen.getByRole('textbox')).toHaveValue(newTextValue);
       expect(saveButton).toBeDisabled();

    })

    test('debe de hacer la llamada a la función al pulsar el botón guardar', () =>{
        render(
            < TodoItemEditable description={description} onSaveClick={onSaveClick}/>
       );

       const input = screen.getByRole('textbox');
       const saveButton = screen.getByRole('button');
       const newTextValue = "nueva descripción de TODO";

       fireEvent.input( input, {target: {value: newTextValue}});
       fireEvent.click(saveButton);
       
       expect( onSaveClick ).toHaveBeenCalledWith(newTextValue);

    })

});