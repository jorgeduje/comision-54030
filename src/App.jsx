import {useState} from "react"
// import Navbar from "./components/layout/Navbar"
// import { productos, Navbar } from "./components/layout/Navbar"

import { Counter } from "./components/common/Counter"
import { Navbar } from "./components/layout/Navbar"
import ItemListContainer from "./components/pages/ItemListContainer"

const App = ()=>{

  const [ darkMode , setDarkMode  ] = useState(false)

  

  const cambiarModo = ()=>{

    setDarkMode(  !darkMode  )

  }

  console.log( darkMode )

  return (
    <div>
      <button onClick={cambiarModo}>De modo claro a modo oscuro</button>
     {/* <Navbar />
     <ItemListContainer /> */}
     <Counter />
    </div>
  )
}

export default App

