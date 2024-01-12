import React from 'react'
import Card from './Card'
import Div from './Div'
import './rame.css'
import Header from './Header'

const Rame = ({setActiveNum, setOutput,activeNum}) => {
    const list =[1,2,3,4,5]
  return (
    <div className='xo'>
       
       <div className='nm'>
       <h1 className='how'>How did we do?</h1>
       <h2 className='pls'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</h2>
       </div>

  <Header/>
 
 
       {list.map((number,i)=> (
        <Card key={i} id={`${number}`} setActiveNum={setActiveNum} activeNum={activeNum}/>

       ))}
        <div className="ara">
          
       <button className='da' onClick={()=> activeNum && setOutput(true) }>submit</button>
       </div>
    </div>
  )
}

export default Rame