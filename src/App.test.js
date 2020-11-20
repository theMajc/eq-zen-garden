import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, MemoryRouter} from  'react-router-dom';
import { render, screen } from '@testing-library/react';

import App from './App';
import PageNotFound from './components/PageNotFound';

// jest.mock('./components/Main');
jest.mock('./components/PageNotFound');

describe('Test suits for Earthquack Zen Garden', () => {
	it('app should render without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, div);
	});

	it('home should show app name', () => {
		render(<BrowserRouter><App/></BrowserRouter>);
		expect(screen.getByText('Earthquake Zen Garden')).toBeInTheDocument();
	});

	test('invalid path should redirect to 404', () => {
		PageNotFound.mockImplementation(() => <div>PageNotFoundMock</div>);
		render(
			<MemoryRouter initialEntries={[ '/random' ]}>
				<App/>
			</MemoryRouter>
		)
		expect(screen.getByText("PageNotFoundMock")).toBeInTheDocument();
	});

	test('profile page should show info', () => {
		render(
			<MemoryRouter initialEntries={[ '/profile' ]}>
				<App/>
			</MemoryRouter>
		)
		expect(screen.getByText("Alice")).toBeInTheDocument();
	});
});