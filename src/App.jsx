import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Rame from './components/Rame'
import Output from './components/Output'
import Div from './components/Div'

function App() {
 
  const[output,setOutput]=useState(false)
  const[activeNum,setActiveNum]= useState()
  console.log(activeNum)

  return (
    <>
    <div className='b'>

    <div className='a'> </div>

    </div>
     {!output?
     <Rame setActiveNum={setActiveNum} setOutput={setOutput} activeNum={activeNum}/>:
    <Output activeNum={activeNum}/>
    
  }
    </>
  )
}

export default App
