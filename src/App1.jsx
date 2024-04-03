import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Home from "./22/Home"
import About from "./22/About.jsx"
import Profile from "./22/Profile"
import "./22/Home.css"

export default function App1() {
  return(
    <BrowserRouter>
    <nav>
      <Link to="/" element={<Home/>}>Home</Link>
    </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/profiles/:username" element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  )
}