import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Todo from './components/Todo.jsx'
import LandingPage from './components/LandingPage.jsx'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import ForgotPassword from './components/ForgotPassword.jsx'


import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot" element={<ForgotPassword />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
