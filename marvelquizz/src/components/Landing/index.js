import React, { useRef, useEffect, useState, Fragment } from 'react';

const Landing = () => {

  const refWolverine = useRef(false);

  const [btn, setBtn] = useState(null);

  console.log(btn);

  useEffect(() => {
    // Add ClassName to show  claws
    refWolverine.current.classList.add('startingImg');
    setTimeout(() => {
      // remove className tohide  claws
      refWolverine.current.classList.remove('startingImg')
      setBtn(true)
    }, 1000)
  }, [])

  const setLeftImg = () => {
    console.log('salut');
    refWolverine.current.classList.add('leftClaws')
  }

  const setRighttImg = () => {
    console.log('ça va');
    refWolverine.current.classList.add('rightClaws')
  }

  // Conditional rendering of buttons
  const displayBtn = btn && (
    <Fragment>
       <div className="leftBox" onMouseOver={setLeftImg}>
        <button className="btn-welcome">Inscription</button>
      </div>
      <div className="rightBox" onMouseOver={setRighttImg}>
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
