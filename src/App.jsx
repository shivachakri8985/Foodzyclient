import React from 'react'
import LandingPage from './appFF/pages/LandingPage'
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import ProductMenu from './appFF/components/ProductMenu'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/products/:firmId/:firmName' element={<ProductMenu/>}/>
      </Routes>
    </div>
  )
}

export default App
