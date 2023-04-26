import React from 'react'
import Final from './Final'
import { useState } from 'react'
const Brand = ({price}) => {
    let[d,updated]=useState();
  return (
    <>
        <h1>brand component </h1>
        <h3>{price}</h3>
        <button onClick={()=>{updated('show final')}}>show final</button>
        {d==="show final"?<Final/>:null}
    </>
  )
}

export default Brand
