import React from 'react'
import { Homepage } from './components/Homepage'
import { SearchedMovie } from './components/searchedMovie'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (

    <BrowserRouter>
        <div className=' h-screen w-full'>
          <Routes>
              <Route path='/' element={<Homepage/>} />
              <Route path='/search/:searchTerm' element={<SearchedMovie/>} />

          </Routes>
        </div>
    </BrowserRouter>
  )
}

export default App
