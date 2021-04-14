// Functionals import
import React, { Fragment } from 'react'
// Esthetics import
import './Loader.css'


const Loader = ({ loadingMsg, styling }) => {
  return (
    <Fragment>
      <div className="loader"></div>
      <p style={styling}>
        {loadingMsg}
      </p>
    </Fragment>
    
  )
}

export default Loader
