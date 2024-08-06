import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer'
import LoginPopUp from './components/LoginPopUp';
import AddScammerPopUp from './components/AddScammerPopUp';


const App = props => {
  const [showLogin, setShowLogin] = useState(false);
  const [showScammerPopUp, setShowScammerPopUp] = useState(false);

  return (
    <>
    {showLogin ? <LoginPopUp setShowLogin={setShowLogin} /> : <></>}
    {showScammerPopUp ? <AddScammerPopUp setShowScammerPopUp={setShowScammerPopUp} /> : <></>}

      <div className='app w-[80%] m-auto'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home setShowScammerPopUp={setShowScammerPopUp} />} />
        </Routes>
      </div>

      <Footer />
    </>
  )
}

App.PropTypes = {}

export default App