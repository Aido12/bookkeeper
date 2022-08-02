import './App.css';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="Header">
        <h1>Bookkeeper</h1>
      </header>
      <nav className="Nav">
        <Link className="Link" to="/invoices">
          Invoices
        </Link>{' '}
        |{' '}
        <Link className="Link" to="/expenses">
          Expenses
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
