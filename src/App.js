import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
//import { getPostalInfo } from './store/postalReducer';
//import { fetchPostal } from './asynAction/postalLookup';
//import { useDispatch } from 'react-redux';

import Navbar from './components/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Universities from './pages/uni';
import PostalLookup from './pages/postal';


function App() {
  // const dispatch = useDispatch();

  return (

    <div className="App">
      <header className="App-header">

        <Router>
          <Navbar />
          <Routes>
            <Route exact path='/home' element={<Home />} />
            <Route path='/universities' element={<Universities />} />
            <Route path='/postalLookup' element={<PostalLookup />} />
          </Routes>
        </Router>

 


        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
