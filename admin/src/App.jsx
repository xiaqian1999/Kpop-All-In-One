import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Routes, Route} from 'react-router-dom'
import ListPost from './pages/ListPost'
import AddPost from './pages/AddPost'

const App = () => {
  return (
    <div>
      <Navbar />
      <hr />
      <div className='app-content'>
        <Sidebar />
        <Routes>
          <Route path="/addpost" element={<AddPost />} />
          <Route path="/listpost" element={<ListPost />} />
        </Routes>
      </div>
    </div>
  )
}

export default App