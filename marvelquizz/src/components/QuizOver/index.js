import React, { Fragment } from 'react'

const QuizOver = React.forwardRef((props, ref) => {

  console.log(props);
  console.log(ref);

  return (
    <Fragment>
      <div className="stepsBtnContainer">
        <p className="successMsg">Bravo, vous êtes un expert !</p>
        <button className="btnResult success">Niveau Suivant</button>
      </div>
      <div className="percentage">
        <div className="progressPercent">Réussite: 10%</div>
        <div className="progressPercent">Note: 10/10</div>
      </div>

      <hr/>
      <p>Les réponses aux questions posées: </p>
    </Fragment>
  )
})

 
// React.memo called to prevent execution of unnecessary functions 
export default React.memo(QuizOver)
