import React from 'react'
import './output.css'

const Output = ({activeNum}) => {
  
  return (
    <>
    <div className='gio'>
     <img className='kaxa' src="/assets/ok.svg" alt="" />
     </div>
     <div className='nino'>
     <h1 className='rati'>Thank you!</h1>
     <h2 className='dato'>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</h2>
     </div>
    <div className='o'>  You selected  {activeNum} out of 5 </div>
   
    </>
  )
}

export default Output
