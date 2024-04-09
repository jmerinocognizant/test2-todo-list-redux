import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import App from '../App';

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  //screen.debug();
  const title = screen.queryByText('My Todos',{selector: 'h1'});
  //console.log(title);
  expect(title).toBeInTheDocument();

});