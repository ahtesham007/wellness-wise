import Herosection from "../herosection"
import axios from 'axios'
import { useState } from "react"
import Result from "./result"
import Footer from "./footer"
// import Herosection from "../herosection"
const brain = () => {
  const [back, setback] = useState(false)
  const [image, setimage] = useState('')
  const [imageData, setImageData] = useState('');
  const [loading, setloading] = useState(false);
  const [result,setresult] = useState(false)
const [accuracy,setaccuracy]= useState('')

  // const [home,sethome]=useState(false)

  function handleFileSelect(event) {
    setImageData(event.target.files[0])
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      setimage(event.target.result);
    };
    reader.readAsDataURL(file);
     
  }

  function submitbtn() {
    if(!image){
      return alert('Please uplode an image')
    }
    setloading(true)
    const formdata = new FormData()
    formdata.append('image', imageData)
    axios.post('http://localhost:5000/predict/tumor', formdata).then((res) => {
      console.log(res.data)
      setaccuracy(res.data)
      setloading(false)
      setresult(true)

    })

  }
const handelhome = ()=>{
  console.log('home')
  setback(true)
}


  if (back) {
    return <Herosection />
  }



  return (
    <>

   
 <div  className="navbar">

<div  className="logo">
<h3 onClick={handelhome} className="wellnesswise" >WELLNESS <span className="wise">WISE <i className="bi bi-plus"></i>  </span> </h3>
   {/* <img width={'100px'} src="image/WELLNESS WISE (1).png" alt="" /> */}
</div>
<div className="nav-link">
    <a className={'link'} onClick={handelhome} >HOME</a>
    
     <a className={'link'} href="/#about">ABOUT</a>
     <a className={'link'} href="#contact">CONTACT</a>
    {/* <Link to={'about'} className={'link'} >CONTACT</Link> */}

</div>

 </div>
 {result ? <Result image ={image} accuracy={accuracy} />:  <div className="brain-section" >

<div className="brain-logo-section">
  <h3 className="wellnesswise" >WELLNESS <span className="wise">WISE <i className="bi bi-plus"></i>  </span> </h3>
</div>
<div className="bottom-img-brain">
  <div className="left-text-brain">
    <h > <span className="inside-dep" >WELLNESS WISE </span> The brain is the most complex organ in the human body, and it is responsible for controlling all of the body's functions. It is located in the skull and weighs about 3 pounds. The brain is made up of approximately 100 billion neurons, which are specialized cells that communicate with each other through electrical and chemical signals. These neurons form intricate networks that allow us to think, learn, and remember. </h>
      <div className="predict-img">
      <div className="back-submit">
      <label htmlFor="inputTag">
      Select Image  <i className="bi bi-camera"></i>
      <input className="main-input" id="inputTag" type="file"  onChange={handleFileSelect}  />
    </label>
   
  <button onClick={submitbtn} >Predict</button>
    {/* <button onClick={() => setback(true)} >go back</button> */}
  </div>
  <div className="predict-images">
    {image&&<img width={'200px'} height={'117px'} src={image} alt="" />} 
  </div>
      </div>

      {loading&&<div className="loading-spinner">
        <div className="spinner"></div>
      
      </div>}
    
      
   

  </div>
  <div className="right-image-brain">
 
    <img width={'100%'} src="image/about.png" alt="" />
  </div>
</div>

</div> }
  <Footer/>
    </>

  )
}

export default brain
