import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Register from "./components/register.component";
import Login from "./components/login.component";
import Navbar from "./components/navbar.component";
import CreateClass from "./components/createClass.component";
import Dashboard from "./components/dashboard.component";

function App() {
  return (
    <Router>
      <Navbar />
      <Route path='/register' exact component={Register} />
      <Route path='/login' exact component={Login} />
      <Route path='/dashboard' exact component={Dashboard} />
    </Router>
  );
}

export default App;
