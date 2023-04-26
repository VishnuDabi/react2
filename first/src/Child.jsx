import React from 'react'

const Child = () => {
  return (
    <>
        <h1>Child component is running</h1>
    </>
  )
}
const Second=()=> <h1> Second component is running</h1>
const Third =()=> <h1>Third component is running</h1>

export default Child;
export {Second,Third};