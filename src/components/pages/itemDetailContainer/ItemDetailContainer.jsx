import React, { useEffect } from 'react'
import { products } from '../../../productsMock'


export const ItemDetailContainer = () => {

    let id = 21


    useEffect( ()=>{
    // tarea lo mismo del itemList 
    // guardar en un estado el objeto del producto 
    }, [id])

  return (
    <div>ItemDetailContainer</div>
  )
}
