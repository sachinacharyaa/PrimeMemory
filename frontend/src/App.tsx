// import { useState } from 'react'
// import './App.css'
// import { Button } from './component/button'
// import { PlusIcon } from './Icon/plusIcon'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <Button size="md" variant="primary" text="share" startIcon={<PlusIcon />} />

//       <Button size="md" variant="secondary" text="Add content" />
//     </>


//   )
// }

// export default App


import "./App.css"
import { Button } from './component/ui/Button'
import { PlusIcon } from "./Icon/plusIcon"


function App(){

  return(
    <>
    
    <Button  size = "lg" title = "share"></Button>
    <Button  size = "lg" title = "Submit"></Button>
    <PlusIcon size = {"lg"} />
     <PlusIcon size = {"lg"} />

    </>
  )
}

export default App