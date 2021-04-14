// Functionals import
import React, { Fragment } from 'react'
// Esthetics import
import './Loader.css'


const Loader = ({ loadingMsg, styling }) => {
  return (
    <Fragment>
      <div className="loader"></div>
      <p style={{textAlign: 'center', color: 'red'}}>
        Passez ce niveau pour débloquer le niveau suivant. Recommençons!
      </p>
    </Fragment>
    
  )
}

export default Loader
