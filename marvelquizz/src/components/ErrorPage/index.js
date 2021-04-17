// Functionals import
import React from 'react';
// Components import
import Deadpool from '../../assets/images/404dp.png'
// Esthetics import
import './errorPage.css'

const ErrorPage = () => {
  return (
    <div className="signUpLoginBox">
      <div className="container">
        <img src={ Deadpool } alt="error Page"/>
      </div>
    </div>
  )
}

export default ErrorPage