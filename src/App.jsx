import { useState } from 'react'
import './App.css'
import { Outlet } from "react-router-dom";
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import { ToastContainer } from 'react-toastify';
function App() {

  return (
    <> 
    <ToastContainer/>
      <Sidebar/>
      <div className="main-content">
       <Navbar/>
        <section style={{
          scrollBehavior: "smooth"
        }}><Outlet/></section>
      </div>
    </>
  )
}

export default App
