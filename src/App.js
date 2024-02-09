
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import About from "./pages/About"
import Internship from "./pages/Internship"
import Contact from "./pages/Contact"








function App() {



    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/internship" element={<Internship />} />
                <Route path="/contact" element={<Contact />} />

                


            </Routes>
        </BrowserRouter>
    )
}
export default App