import React from 'react'

const PropsSecond = ({name,address}) => {
  return (
    <>
        <h3>PropsSecond component is running</h3>
        <h3>{name} </h3>
        <h3>{address} </h3>
    </>
  )
}

export default PropsSecond