import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Routes, Route} from 'react-router-dom'
import ListPost from './pages/ListPost'
import AddPost from './pages/AddPost'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const url = "http://localhost:4000";

  return (
    <div>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className='app-content'>
        <Sidebar />
        <Routes>
          <Route path="/addpost" element={<AddPost  url={url} />} />
          <Route path="/listpost" element={<ListPost  url={url} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App