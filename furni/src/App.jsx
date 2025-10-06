import React from 'react'
import Home from './Home'
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Shop from './Shop';
import About from './About';
import Services from './Services';
import Blog from './Blog';
import Contact from './Contact';

function App() {
  return (
    <div>
      <BrowserRouter>
       
            <Routes>
                      
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          console.log("hai",isActive)
       

        <Route path="/" element={<Home/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/contact" element={<Contact/>} />
      
      </Routes>
      </BrowserRouter>

      {/* <Shop/> */}
    </div>
  )
}

export default App
