// Functionals import
import React from 'react';
// Components import
import Deadpool from '../../images/404orange.png'
// Esthetics import
import './errorPage.css'

const ErrorPage = () => {
  return (
    <div className="quiz-bg">
      <div className="container">
        <img src={ Deadpool } alt="error Page"/>
      </div>
    </div>
  )
}

export default ErrorPage