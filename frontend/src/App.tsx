import "./App.css"
import { Button } from './component/ui/Button'
import { PlusIcon } from "./Icon/plusIcon"
import { ShareIcon } from "./Icon/shareIcon"
import { Card } from "./component/ui/card"

function App(){

  return(
    <>
    
    <Button
    variant = {"primary"}
          size = "md" 
      title = {"Add Content"}
      startIcon={PlusIcon}
        ></Button>
  


   <Button
    variant = {"secondary"}
      size = "md" 
      title = {"Share Brain"}
      startIcon={ShareIcon }
        ></Button>


    <Card></Card>


    </>
  )
}

export default App