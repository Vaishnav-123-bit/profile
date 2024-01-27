import React from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Contact from './components/Contact'
import Footer from './components/Footer'
import About from './components/About'
const App = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Header/>
        <Home/>
        <About/>
        <Contact/>
        <Footer/>

    </div>
    </>
  )
}

export default App