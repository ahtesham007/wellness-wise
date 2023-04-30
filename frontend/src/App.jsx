
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Navbar from './navbar';
import './App.css'
import HeroSection from './herosection';
function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route  path='/' element={<HeroSection/>} >
      {/* <Route  index element={<HeroSection/>} /> */}
      <Route  path='/about' element={'about'} />

      </Route>
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
