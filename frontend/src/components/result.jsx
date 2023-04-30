
import Navbar from '../navbar'
import Footer from './footer'
const result = (props) => {
    console.log(props.accuracy.accuracy)
  return (
    <div>
    
        <div className="result-page">
            <div className="result-img">
                <img className='result-image' width={'100%'} src={props.image} alt="" />
            </div>
            <div className="result-text">
             <h1>{props.accuracy.res}</h1> 
             <h2>Accuracy : {props.accuracy.accuracy}%</h2> 
            </div>

       
        </div>
    
    
    </div>
  )
}

export default result
