import React from 'react'
// import Child, { Second, Third } from './Child'
import Abc from './Child'
import { Second,Third } from './Child'
import First from './components/First'

const App = () => {
  let name='rk';
  let r=101;
  return (
    <>
      <h1>App component is running</h1>
      <First/>
      {/* <Child/> */}
      <Abc/>
      <Second/>
      <Third/>
      <p>If else by ternary operator</p>
      {name==='dabi'?<h1>name is dabi </h1>:<h1>name is something else</h1>}
      value = <input type='text' value={r} readOnly/>
    </>
  )
}

export default App