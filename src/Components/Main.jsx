import React from 'react'
import { Routes, Route } from "react-router-dom"

const Main = () => {
  return (
    <div>
        <Routes>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/cart" element={<Cart />}/>
        </Routes>
    </div>
  )
}

export default Main;