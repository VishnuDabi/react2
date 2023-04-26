import React, { useState } from 'react'
import Product from './component/Product'
const App = () => {
  let [p,updatep]=useState('');
  return (
    <>
      <h1>App componenet </h1>
      <button onClick={()=>{updatep('show')}}>show product</button>
      {p==='show'?<Product name='a1' price={15000} cat='mob' cmp='samsung' />:null}
    </>
  )
}

export default App