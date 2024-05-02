import { fireEvent, render, screen } from '@testing-library/react';
import { TodoItemBtn } from '../../../../features/todo/components';

describe('Pruebas en <TodoItemBtn />', () => { 

    const onClickHandler = jest.fn();

    test('debe de hacer match con el snapshot', () => {
        const { container } = render(
             < TodoItemBtn checked={false} classNameIcon="fa-solid fa-exclamation" onClickHandler={onClickHandler}/>
        );

        expect( container ).toMatchSnapshot();
    });

    test('debe de mostrar un botón fa-exclamation sin seleccionar', () =>{
        const { container, getByText } = render(
            < TodoItemBtn checked={false} classNameIcon="fa-solid fa-exclamation" onClickHandler={onClickHandler}/>
       );

       const button = container.querySelector('button');
       expect(button).toHaveClass('btn-outline-primary');
       expect(button?.firstChild).toHaveClass('fa-exclamation');
    })


    test('debe de mostrar el botón seleccionado', () =>{
        const { container, getByText } = render(
            < TodoItemBtn checked={true} classNameIcon="fa-solid fa-exclamation" onClickHandler={onClickHandler}/>
       );

       const button = container.querySelector('button');
       expect(button).toHaveClass('btn-primary'); 
    })

    test('debe de realizar realizar la llamada a la función onClick', () =>{
        const { container, getByText } = render(
            < TodoItemBtn checked={true} classNameIcon="fa-solid fa-exclamation" onClickHandler={onClickHandler}/>
       );

       fireEvent.click(screen.getByRole('button',{name: 'btn-todo'}));

       expect( onClickHandler ).toHaveBeenCalled();
       

    })

 });

 