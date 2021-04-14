// Functionals import
import React, { Fragment } from 'react'

const Loader = () => {
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