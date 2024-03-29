import { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  TextShpere
} from "./components";
import SkillsSphere from "./me";

// import './App.css'

// import MeMyselfI from './me'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        {/* <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center ">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience /> */}
          <About />
          {/* <Tech />  */}
          {/* <Works />
          <Feedbacks />
          <div className="relative z-0">
            <Contact/>
            <StarsCanvas/>
          </div>
        </div> */}
      </BrowserRouter>
      <div>
        <TextShpere/>
      </div>          
    </>
  );
}

export default App;
