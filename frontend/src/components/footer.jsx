import React from 'react'

const footer = () => {
    const date = new Date().getFullYear()
  return (
    <div className='footer' >
     <h3 className="wellnesswise" >WELLNESS <span className="wise">WISE <i className="bi bi-plus"></i>  </span> </h3>
    <h4>Team Paradox </h4>
     
   <h5>&#169; {date} All Rights Reserved</h5>
     
    </div>
  )
}

export default footer
