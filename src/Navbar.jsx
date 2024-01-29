import "./Navbar.css"

import pepito from "./images/images.png"

export const Navbar = ()=>{

    return <nav>

        {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ZW-GtC__I5tt7QpyN8aWrEm7b8brelQWaCO1s6V8eGa4E9OP9lQM4pMSOnxvwTsiVXk&usqp=CAU" />  */}
        {/* <img src={pepito} alt="" /> */}
        <img src="/public/images.png" alt="" />
        
        <img src="https://res.cloudinary.com/dnqfh2chg/image/upload/v1706540172/images_rz1plz.jpg" alt="" />
        <img src="https://res.cloudinary.com/dnqfh2chg/image/upload/v1706540193/images_o3zvni.jpg" alt="" />
        <ul>
            <li className="bulletPoint">productos</li>
            <li>servicios</li>
            <li>contacto</li>
        </ul>
        
    </nav>
}



// const sumar = ()=>{
//     let a = 12 
//     let b = 3
//     return a - b  
// }


// sumar()

// Navbar() ---> <Navbar />