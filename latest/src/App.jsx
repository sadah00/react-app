import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Products from './pages/Products'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Products/>}/>
      </Routes>
    </div>
  )
}

export default App
