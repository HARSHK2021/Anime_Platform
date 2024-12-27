import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { ToastContainer } from 'react-toastify'
import { HomePage } from './pages/HomePage'
import { WatchPage } from './pages/WatchPage'
import Search from './pages/Search'

function App() {
  
  return (
    <BrowserRouter>
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950">
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/watch/:mal_id" element={<WatchPage />} />
        <Route path='/search' element={<Search />} />
        
        

      </Routes>
      <ToastContainer />
    </div>
  </BrowserRouter>
  )
}

export default App
