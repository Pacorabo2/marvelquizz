import React, { useRef, useEffect, useState, Fragment } from 'react';

const Landing = () => {

  const refWolverine = useRef(false);

  const [btn, setBtn] = useState(null);

  console.log(btn);

  useEffect(() => {
    // Add ClassName to show left claws
    refWolverine.current.classList.add('leftClaws');
    setTimeout(() => {
      // remove className tohide left claws
      refWolverine.current.classList.remove('leftClaws')
      setBtn(true)
    }, 3000)
  }, [])

  const displayBtn = btn && (
    <Fragment>
       <div className="leftBox">
        <button className="btn-welcome">Inscription</button>
      </div>
      <div className="rightBox">
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
