import Brain from "./components/brain"
import Lungs from "./components/lungs"
import Footer from "./components/footer"
import Contact from "./components/contact"
import About from "./about"
import Contactus from "./components/contactus"
import { useState, useEffect } from "react"
// import Navbar from "./navbar"
const herosection = () => {
  const [page, setpage] = useState(false)
  const [lungs, setlungs] = useState(false)
  // useEffect(() => {
  //   const checkServerHealth = async () => {
  //     const responce = await fetch('http://localhost:5000/')
  //     const data = await responce.json()
  //     console.log(data)
  //   }
  //   checkServerHealth();

  // }, [])











  function handelbtn() {


    setpage(true)

  }
  function handellungs() {
    setlungs(true)

  }
  if (page) {
    return <Brain />
  }
  if (lungs) {
    return <Lungs />
  }

  return (
    <>   
             <div  className="navbar">

<div  className="logo">
<h3 className="wellnesswise" >WELLNESS <span className="wise">WISE <i className="bi bi-plus"></i>  </span> </h3>
   {/* <img width={'100px'} src="image/WELLNESS WISE (1).png" alt="" /> */}
</div>
<div className="nav-link">
    <a className={'link'} href="/#home">HOME</a>
    
     <a className={'link'} href="#about">ABOUT</a>
     <a className={'link'} href="#contact">CONTACT</a>
    {/* <Link to={'about'} className={'link'} >CONTACT</Link> */}

</div>

 </div>
    
     <div id="home"  className='hero' >
      <div className="hero-section">


        <div className="left-section">
          <h3 className="wellnesswise" >WELLNESS <span className="wise">WISE <i className="bi bi-plus"></i>  </span> </h3>
          <h1 className='title' >Guiding Health Care Representative/Patients and
            Empowering Care</h1>
          <p className="dep-wellness-wise" >WELLNESS WISE is offering brain tumor and lung pneumonia scanning services would likely provide detailed information about the technology used for scans and the diagnostic process. 
          </p>
          <div className="btns">


            <button onClick={handelbtn} >BRAIN</button>

            <button onClick={handellungs} >LUNGS</button></div>

        </div>
        <div className="right-section">


          <img className='hero-main' src="image/banner.png" alt="" />
        </div>

      </div>
    </div>
    <Contact/>
     <About/>
      <Contactus/>
      <Footer />
    </>

  )
}

export default herosection
