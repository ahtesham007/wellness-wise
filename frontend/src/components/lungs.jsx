import React from 'react'
import axios from 'axios'
import Herosection from '../herosection'
import Result from './result'
import Footer from './footer'
import { useState } from 'react'
const lungs = () => {
const [back,setback]=useState(false)
const [image, setimage] = useState('')
const [imageData, setImageData] = useState('');
const [result, setresult] = useState(false);
const [loading, setloading] = useState(false);
const [accuracy,setaccuracy]= useState('')
function handleFileSelect(event) {
console.log(event.target.files[0])
setImageData(event.target.files[0])
const file = event.target.files[0];
const reader = new FileReader();
reader.onload = (event) => {
  setimage(event.target.result);
};
reader.readAsDataURL(file);

}

function submitbtn(){
    if(!image){
        return alert('Please uplode an image')
      }
    setloading(true)
 const formdata = new FormData()
 formdata.append('image',imageData)
 axios.post('http://localhost:5000/predict/pneumonia',formdata).then((res)=>{
  console.log(res.data)
  setaccuracy(res.data)
  setloading(false)
  setresult(true)
 })

}
const goback=()=>{
    setback(true)
}
if(back){
    return <Herosection/>
}



  return (<>

<div  className="navbar">

<div  className="logo">
<h3 onClick={goback} className="wellnesswise" >WELLNESS <span className="wise">WISE <i className="bi bi-plus"></i>  </span> </h3>
   {/* <img width={'100px'} src="image/WELLNESS WISE (1).png" alt="" /> */}
</div>
<div className="nav-link">
    <a className={'link'} onClick={goback} href="/#home">HOME</a>
    
     <a className={'link'} href="/#about">ABOUT</a>
     <a className={'link'} href="#contact">CONTACT</a>
     {/* to={'about'} className={'link'} >CONTACT</> */}

</div>

 </div>
   {result? <Result  image = {image} accuracy={accuracy} />:<div className="brain-section" >

<div className="brain-logo-section">
<h3 className="wellnesswise" >WELLNESS <span className="wise">WISE <i className="bi bi-plus"></i>  </span> </h3>
</div>
<div className="bottom-img-brain">
  <div className="left-text-brain">
    <h > <span className="inside-dep" >WELLNESS WISE </span> Pneumonia is an infection of the lungs that can be caused by viruses, bacteria, fungi, or other microorganisms. It is a common illness that can range in severity from mild to life-threatening, especially in older adults, infants, and people with weakened immune systems. Symptoms of pneumonia may include cough, fever, chills, shortness of breath, chest pain, and fatigue. </h>
      <div className="predict-img">
      <div className="back-submit">
      <label htmlFor="inputTag">
      Select Image  <i className="bi bi-camera"></i>
      <input className='main-input' id="inputTag" type="file"  onChange={handleFileSelect}  />
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

 <img width={'100%'} src="image/brain.png" alt="" />
</div>
  </div>

</div>}

<Footer/>
      </>)
}

export default lungs
