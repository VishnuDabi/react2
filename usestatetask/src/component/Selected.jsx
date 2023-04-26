import React from 'react'
import Brand from './Brand'
import { useState } from 'react';
const Selected = ({name,price,cat,}) => {
    let [b,updateb]=useState('');
  return (
    <>
        <h1>Selected component is running</h1>
        <h2>{name} {price} {cat} </h2>
        <button onClick={()=>{updateb('brands called')}}>show Brands</button>
        {b==='brands called'?<Brand price={price} />:null}
    </>
  )
}

export default Selected