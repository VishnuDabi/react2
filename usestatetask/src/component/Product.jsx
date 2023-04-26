import React,{useState} from 'react'
import Selected from './Selected'
const Product = ({name,price,cat,cmp}) => {
    let [s,updates]=useState('')
  return (
    <>
        <h1>Product component is running</h1>
        <h2>{name} {price} {cat} {cmp} </h2>
        {/* <Selected/> */}
        <button onClick={()=>{updates('selected called')}}>show selected</button>
        {s==='selected called'?<Selected name={name} price={price} cmp={cmp} />:null}
    </>
    
  )
}
Product.defaultProps={
    name:"A50",
    price:15000,
    cat:'Mobile',
    cmp:'mi' 
}

export default Product