import { fireEvent, render, screen } from '@testing-library/react';
import { CompletedBtn } from '../../../../features/todo/components/CompletedBtn';

describe('Pruebas en <CompletedBtn />', () => { 

    const onClickHandler = jest.fn();

    test('debe de hacer match con el snapshot', () => {
        const { container } = render(
             < CompletedBtn completed={false} onClickHandler={onClickHandler}/>
        );

        expect( container ).toMatchSnapshot();
    });

    test('debe de mostrar un botón fa-check sin seleccionar', () =>{
        const { container, getByText } = render(
            < CompletedBtn completed={false} onClickHandler={onClickHandler}/>
       );

       const button = container.querySelector('button');
       expect(button).toHaveClass('btn-outline-primary');
       expect(button?.firstChild).toHaveClass('fa-check');
    })


    test('debe de mostrar el botón seleccionado', () =>{
        const { container, getByText } = render(
            < CompletedBtn completed={true} onClickHandler={onClickHandler}/>
       );

       const button = container.querySelector('button');
       expect(button).toHaveClass('btn-primary');
    })

    test('debe de realizar realizar la llamada a la función onClick', () =>{
        const { container, getByText } = render(
            < CompletedBtn completed={true} onClickHandler={onClickHandler}/>
       );

       fireEvent.click(screen.getByRole('button',{name: 'btn-completed'}));

       expect( onClickHandler ).toHaveBeenCalled();
       

    })

 });

 