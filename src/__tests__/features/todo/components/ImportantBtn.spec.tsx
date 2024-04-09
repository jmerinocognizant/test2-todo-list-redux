import { fireEvent, render, screen } from '@testing-library/react';
import { ImportantBtn } from '../../../../features/todo/components';

describe('Pruebas en <ImportantBtn />', () => { 

    const onClickHandler = jest.fn();

    test('debe de hacer match con el snapshot', () => {
        const { container } = render(
             < ImportantBtn important={false} onClickHandler={onClickHandler}/>
        );

        expect( container ).toMatchSnapshot();
    });

    test('debe de mostrar un botón fa-exclamation sin seleccionar', () =>{
        const { container, getByText } = render(
            < ImportantBtn important={false} onClickHandler={onClickHandler}/>
       );

       const button = container.querySelector('button');
       expect(button).toHaveClass('btn-outline-primary');
       expect(button?.firstChild).toHaveClass('fa-exclamation');
    })


    test('debe de mostrar el botón seleccionado', () =>{
        const { container, getByText } = render(
            < ImportantBtn important={true} onClickHandler={onClickHandler}/>
       );

       const button = container.querySelector('button');
       expect(button).toHaveClass('btn-primary');
    })

    test('debe de realizar realizar la llamada a la función onClick', () =>{
        const { container, getByText } = render(
            < ImportantBtn important={true} onClickHandler={onClickHandler}/>
       );

       fireEvent.click(screen.getByRole('button',{name: 'btn-important'}));

       expect( onClickHandler ).toHaveBeenCalled();
       

    })

 });

 