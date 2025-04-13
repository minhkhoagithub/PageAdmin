import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './component/Layout'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {

  return (
    <>
      <Router>
      <Routes>
        
                    
                    <Route path='home' element={<Layout/>}/>
                    <Route path="dashboard" element={<Layout/>} />
                    <Route path="project" />
                    <Route path="teams"  />
                    <Route path="analist" />
                    <Route path="messages" />
                    <Route path="intergrations"  />
                
      </Routes>
    </Router>
    </>
  )
}

export default App
