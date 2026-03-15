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
import { ShareIcon } from "./Icon/shareIcon"


function App(){

  return(
    <>
    
    <Button
    variant = {"primary"}
          size = "lg" 
      title = {"share"}
        ></Button>
  


   <Button
    variant = {"secondary"}
      size = "lg" 
      title = {"Add"}
        ></Button>




<Button
    variant = {"primary"}
      size = "md" 
      title = {"share"}
        ></Button>

        <Button
    variant = {"primary"}
      size = "md" 
      title = {"share"}
        ></Button>
  
    </>
  )
}

export default App