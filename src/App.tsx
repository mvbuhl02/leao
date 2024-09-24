import React from 'react';
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about/";
import Login from "./pages/login";
import { ClientService } from './utils/api/ClientService';
import { ClientContext } from './context/ClientContext';
import Dashboard from './pages/dashboard';
import { ExpenseContext } from './context/ExpenseContext';
import { IncomeContext } from './context/IncomeContext';
import { IncomeService } from './utils/api/IncomeService';
import { ExpenseService } from './utils/api/ExpenseService';
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"> </link>

function App() {
  const clientService = new ClientService();
  const incomeService = new IncomeService();
  const expenseService = new ExpenseService();

  return (
    <div className="App">
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" href="/">Leãozinho da malhafina</a>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container mt-4">
          <ExpenseContext.Provider value={{ expenseService }}>
            <IncomeContext.Provider value={{ incomeService }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route
                  path="/login"
                  element={
                    <ClientContext.Provider value={{ clientService }}>
                      <Login />
                    </ClientContext.Provider>
                  }
                />
              </Routes>
            </IncomeContext.Provider>
          </ExpenseContext.Provider>
        </div>
      </Router>
    </div>
  );
}

export default App;