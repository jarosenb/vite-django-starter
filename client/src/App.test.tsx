import React from 'react';
import App from './App';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
describe('test router', () => {
  it('test home page', () => {
    const history = createMemoryHistory();
    history.push('/test');
    render(
      <Router history={history}>
        <App />
      </Router>
    );
    expect(screen.getAllByText(/Home/)).toHaveLength(2);
  });

  it('test about page', () => {
    const history = createMemoryHistory();
    history.push('/test/about');
    render(
      <Router history={history}>
        <App />
      </Router>
    );
    expect(screen.getAllByText(/About/)).toHaveLength(2);
  });

  it('test dashboard page', () => {
    const history = createMemoryHistory();
    history.push('/test/dashboard');
    render(
      <Router history={history}>
        <App />
      </Router>
    );
    expect(screen.getAllByText(/Dashboard/)).toHaveLength(2);
  });

});
