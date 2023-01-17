import React from "react";
import {
BrowserRouter as Router,
Routes,
Route,
Link
} from "react-router-dom";
import Makeup from "./Makeup";
import Home from "./Home";
import Promotion from "./Promotion";
import './App.css';

function App() {
  return <Router>
      <nav>
        <Link to="/" className="link">Home</Link>
        <Link to="/makeup" className="link">Makeup</Link>
        <Link to="/promotion" className="link">Promotion</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/makeup" element={<Makeup/>}/>
        <Route path="/promotion" element={<Promotion/>}/>
      </Routes>
    </Router>
}

export default App;
