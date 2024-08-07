import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer'
import LoginPopUp from './components/LoginPopUp';
import AddScammerPopUp from './components/AddScammerPopUp';
import Bookmark from './pages/Bookmark';
import Scammer from './pages/Scammer';
import Wts from './pages/Wts';

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
          <Route path="/bookmark" element={<Bookmark />} />
          <Route path="/wts" element={<Wts />} />
          <Route path="/scammer" element={<Scammer />} />
        </Routes>
      </div>

      <Footer />
    </>
  )
}

App.PropTypes = {}

export default App