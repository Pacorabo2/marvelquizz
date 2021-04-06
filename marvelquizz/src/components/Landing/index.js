import React, { useRef, useEffect } from 'react';

const Landing = () => {

  const refWolverine = useRef(null);

  useEffect(() => {
    refWolverine.current.classList.add('leftClaws')
  }, [])





  return (
    <main ref={refWolverine}className="welcomePage">
      <div className="leftBox">
        <button className="btn-welcome">Inscription</button>
      </div>
      <div className="rightBox">
        <button className="btn-welcome">Connexion</button>
      </div>
    </main>
  )
}

export default Landing;
