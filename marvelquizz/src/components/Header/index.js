// Functionals import
import React from 'react';
// Esthetics import
import Marvel from '../../assets/images/Marvel_quiz.png';
import './header.css'



const Header = () => {
  return (
    <header>
      <div className="banner-container">
        <a href="/"><img src={Marvel} alt=""/></a>
      </div>
    </header>
  )
}

export default Header;
