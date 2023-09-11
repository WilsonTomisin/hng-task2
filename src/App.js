import React from 'react'
import { Header } from './components/header'
import { Feed } from './components/Feed'
import { Footer } from './components/Footer'

const App = () => {
  return (
    <div className=' h-screen w-full'>
      <Header/>
      <Feed/>
      <Footer/>
    </div>
  )
}

export default App
