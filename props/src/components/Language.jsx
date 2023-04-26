import React from 'react'
import PropTypes from 'prop-types';
const Language = ({name,duration,fees,details}) => {
  return (
    <>
        <h1>Language component is running</h1>
        <h3>Language name: {name} </h3>
        <h3>Duration: {duration} </h3>
        <h3>Fees: {fees} </h3>
        <h3>Details: {details} </h3>
    </>
  )
}
Language.propTypes={
    name:PropTypes.string,
    duration:PropTypes.string,
    fees:PropTypes.number,
    details:PropTypes.string
}
Language.defaultProps={
    name:'programming language',
    duration:'3 Month to 1 Year',
    fees:15000,
    details:"contact us"
}
export default Language