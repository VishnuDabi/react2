import React from 'react'
import PropsfFirst from './components/PropsfFirst'
import PropsSecond from './components/PropsSecond'
import Language from './components/Language'
import Data from './components/Data'
const App = () => {
  return (
    <>
      <h1>App component is running</h1>
      <PropsfFirst name='vishnu' address='indore' />
      <PropsSecond name='Dabi' address='mhow' />
      {/* <Language name='java' duration='1 Year' fees={20000} details='java is a language' /> */}
      <p>LAnguage component without props</p>
      <Language/>
      <p>problem in without props </p>
      <Language name='dabi' duration='1 year' fees={15000} details='its a language'/>
      <p>Default props </p>
      <Language/>
      {Data.map((v)=>{
        return <Language name={v.name} duration={v.duration} fees={v.fees} details={v.details} />
      })}
    </>
  )
}

export default App