import { useState } from 'react'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import Navbar from './Navbar'
import Intro from './Intro'
import Card from './Card';
import Projects from './Projects';
import Email from './Email'
import Footer from './Footer'

function App() {


  return (
    <>
     <Navbar />
     <Intro />
     <Card />
     <Projects />
     <Email />
     <Footer />

    </>
  )
}

export default App
