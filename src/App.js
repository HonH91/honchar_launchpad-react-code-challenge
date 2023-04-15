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

 


      
      </header>

    </div>
  );
}

export default App;
