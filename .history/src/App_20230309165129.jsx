import { useState } from 'react'
import {BrowserRouter} from "react-router-dom"

import { About,Contact,Experience , Feedbacks ,Hero,Navbar,Tech,Works,StarsCanvas} from "./components"

// import './App.css'

// import MeMyselfI from './me'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center '>
        <Navbar/>
        <Hero
      </div>
    </div>
    </BrowserRouter>
    <div><h1>hi talha anjum</h1></div>
    </>
  )
}

export default App
