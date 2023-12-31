import { useState } from 'react'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import Navbar from './Navbar'
import Intro from './Intro'
import Card from './Card';
import Projects from './Projects';

function App() {


  return (
    <>
     <Navbar />
     <Intro />
     <Card />
     <Projects />

    </>
  )
}

export default App
