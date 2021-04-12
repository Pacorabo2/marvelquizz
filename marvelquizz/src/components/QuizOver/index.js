import React, { Fragment, useEffect, useState } from 'react'

const QuizOver = React.forwardRef((props, ref) => {

  // To define an array with questions
  const [asked, setAsked] = useState([])
  console.log(asked);
  
  // To listen if changes on ref
  useEffect(()=> {
    // To push in state ref.current to get questions and answers on array
    setAsked(ref.current)
  }, [ref])

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
      <div className="answerContainer">
        <table className="answers">
          <thead>
            <tr>
              <th>Questions</th>
              <th>Réponses</th>
              <th>Infos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  )
})

 
// React.memo called to prevent execution of unnecessary functions 
export default React.memo(QuizOver)
