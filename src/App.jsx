import React from 'react'
import Home from './pages/Home'
import Nav3 from './units/Nav3'
import AddBlogs from './pages/AddBlogs'
import { Routes, Route } from "react-router-dom"


export default function App() {
  return (
    <div>
      <Nav3/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AddBlogs" element={<AddBlogs />} />
      </Routes>
    </div>
  )
}