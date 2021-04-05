import React from 'react';
import Marvel from '../../images/Marvel_quiz.png'

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
