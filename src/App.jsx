import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer'


const App = props => {
  return (
    <>
      <div className='app w-[80%] m-auto'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>

      <Footer />
    </>
  )
}

App.PropTypes = {}

export default App