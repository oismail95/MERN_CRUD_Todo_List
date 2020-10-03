//Omar Ismail
//May 17, 2020
/*************************************/
//On this framework, there will be an image to access to UMSL home page and there will be a text
//that says 'Lambert Airport' to access to Lambert Airport page.
import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";

//UMSL Logo imported
import UMSL from "./umsl.jpg";

function App() {
  return (
    <Router>
      <div className="container">
        
        <nav className="navbar navbar-expand-lg bg-dark">

          <a className="navbar-brand" href="http://www.umsl.edu" target="_blank">
            <img src={UMSL} width="90" height="90"/>
          </a>

          <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>

          <div className="nav-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/edit/:id" className="nav-link">Edit</Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">Create</Link>
              </li>
            </ul>
          </div>

        </nav>

        <Route path="/" exact component={TodosList} />
        <Route path="/edit/:id" component={EditTodo} />
        <Route path="/create" component={CreateTodo} />
      </div>
    </Router>
  );
}

export default App;
