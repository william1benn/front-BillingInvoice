import React from 'react'
import spinner from './spinning.gif';

const Spinner = () => {

  return (
  
  <React.Fragment>

    <img src={spinner} alt ="loading..." style={{width:"200px"}} />

  </React.Fragment>
  )
}

export default Spinner