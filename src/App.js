/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
 */

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Signup from "./pages/Signup";
import Home from "./pages/Home";
// import Signin from "./pages/Signin";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={Home} />
          {/* <Route exact path="/signin" component={Signin} /> */}
          {/* <Route exact path="/sendreceive" component={Signup} /> */}
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
