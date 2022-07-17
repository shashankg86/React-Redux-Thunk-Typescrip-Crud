import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { createStore } from "redux";
import reducer, { initialState } from './store/reducer';
import { Provider } from 'react-redux';

const store = createStore(reducer, initialState);
const Wrapper = ({ children }:{children:any}) => (
	<Provider store={store}>{children}</Provider>
);
test('renders learn react link', async () => {
  render(<App />, { wrapper: Wrapper });
  const linkElement = await screen.getByText(/Crud/i);
  expect(linkElement).toBeInTheDocument();
});
