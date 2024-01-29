import "./App.css"
import { Navbar } from "./Navbar"
import {Footer} from "./Footer"

const App = ()=>{

  
  return (
    <div>

      {/* USAR EL NAVBAR */}
      {/* Navbar() */}
      <Navbar />

     {/* <h1 style={ {color: "steelblue", fontSize: "2rem"} }>Este es el titulo</h1> */}
     <h1 className="title">Este es el titulo</h1>
     <h2>un subtitulo </h2>
     <h2>Algo mas </h2>

     <Footer />
     
    </div>
  )
}

export default App

