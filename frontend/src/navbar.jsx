import React from 'react'
import { Outlet ,Link} from 'react-router-dom'


const navbar = () => {
  return (
    <div >  
      <div  className="navbar">

     <div  className="logo">
     <h3 className="wellnesswise" >WELLNESS <span className="wise">WISE <i className="bi bi-plus"></i>  </span> </h3>
        {/* <img width={'100px'} src="image/WELLNESS WISE (1).png" alt="" /> */}
     </div>
     <div className="nav-link">
         <a className={'link'} href="/#home">HOME</a>
         
          <a className={'link'} href="/#about">ABOUT</a>
         <Link to={'about'} className={'link'} >CONTACT</Link>
   
     </div>
   
      </div>

      <Outlet/> 
    </div>
  )
}

export default navbar
