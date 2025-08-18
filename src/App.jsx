import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Todo from './components/Todo.jsx'
import LandingPage from './components/LandingPage.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<Todo />} />
        
    </Routes>
    
    
    </BrowserRouter>
    </>
  )
}

export default App
