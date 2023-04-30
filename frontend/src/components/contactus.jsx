import React from 'react'

const contactus = () => {

    const handelsubmit = (e)=>{
     e.preventDefault()
    }
  return (
    <div>
      <div id='contact' className="contact-us">
        <div className="contact-us-text">
            <h1 className='contact-title' >Contact us</h1>
        </div>
        <div className="contact-us-input">
            <form onSubmit={(e)=>handelsubmit(e)} className='all-contact-us' action="all-contact-us">
                <input   className='name-input' type="text" placeholder='Name' />
                <input  className='name-input' type="text" placeholder='Your email' />
                <input  className='name-input' type="text" placeholder='Your phone ' />
                <button type='submit' >Submit</button>
            </form>
        </div>
        
      </div>
    </div>
  )
}

export default contactus
