import React, { Fragment } from 'react'

const QuizOver = React.forwardRef((props, ref) => {

  console.log(props);
  console.log(ref);

  return (
    <Fragment>
      <div className="stepsBtnContainer">
        <p className="successMsg">Bravo, vous êtes un expert !</p>
        <button className="btnResult successMsg">Niveau Suivant</button>
      </div>
    </Fragment>
  )
})

 
// React.memo called to prevent execution of unnecessary functions 
export default React.memo(QuizOver)
