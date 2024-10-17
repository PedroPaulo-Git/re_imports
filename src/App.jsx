import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'

function App() {
 
  return (
    <>
    <Header/>
      <div>
      <Hero/>
      </div>
     
    </>
  )
}

export default App
