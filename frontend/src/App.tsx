import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './component/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Button  variant ="primary" text = "share"/>
    
    <Button  variant ="secondary" text = "Add content" />
    </>


  )
}

export default App
