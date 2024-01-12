import React from 'react'
import './card.css'
import Div from './Div'

const Card = ({id,setActiveNum,activeNum}) => {
  
  console.log(id)
  // console.log(activeNum)  
  return (
    
    <>
    

    <button className={`dd ${id === activeNum && "activeButton"}`} id={id} onClick={() => setActiveNum(id)} >{id}</button>
    </>
  )
}

export default Card