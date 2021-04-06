import React, { useRef, useEffect, useState, Fragment } from 'react';

const Landing = () => {

  const refWolverine = useRef(false);

  const [btn, setBtn] = useState(null);
  

  useEffect(() => {
    // Add ClassName to show  claws
    refWolverine.current.classList.add('startingImg');
    setTimeout(() => {
      // remove className tohide  claws
      refWolverine.current.classList.remove('startingImg')
      setBtn(true)
    }, 1000)
  }, [])

  // Show left claws on MouseOver left Div
  const setLeftImg = () => {
    refWolverine.current.classList.add('leftClaws')
  }

  // Show left claws on MouseOver left Div
  const setRighttImg = () => {
    refWolverine.current.classList.add('rightClaws')
  }

  // Clear claws onMouseOut
  const clearImg = () => {
    if(refWolverine.current.classList.contains('leftClaws')) {
      refWolverine.current.classList.remove('leftClaws')
    } else {
      refWolverine.current.classList.remove('rightClaws')
    }
  }

  // Conditional rendering of buttons
  const displayBtn = btn && (
    <Fragment>
       <div className="leftBox" onMouseOver={setLeftImg} onMouseOut={clearImg}>
        <button className="btn-welcome">Inscription</button>
      </div>
      <div className="rightBox" onMouseOver={setRighttImg} onMouseOut={clearImg}>
        <button className="btn-welcome">Connexion</button>
      </div>
    </Fragment>
  )





  return (
    <main ref={refWolverine}className="welcomePage">
      {displayBtn}
    </main>
  )
}

export default Landing;
