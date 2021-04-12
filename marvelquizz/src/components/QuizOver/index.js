import React, { Fragment, useEffect, useState } from 'react'

const QuizOver = React.forwardRef((props, ref) => {

  // Destructuring props
  const {levelNames, score, maxQuestions, quizLevel, percent} = props

  // To define an array with questions
  const [asked, setAsked] = useState([])
  
  // To listen if changes on ref
  useEffect(()=> {
    // To push in state ref.current to get questions and answers on array
    setAsked(ref.current)
  }, [ref])

  // to get average
  const averageGrade = maxQuestions / 2

  // Condition to pass Level
  const decicion = score >= averageGrade ? (
    <Fragment>
      {
        quizLevel < levelNames.length ? 
        (
          <Fragment>
            <p className="successMsg">Bravo, passez au niveau suivant!</p>
            <button className="btnResult success">Niveau Suivant</button>
          </Fragment>
        )
        :
        (
          <Fragment>
            <p className="successMsg">Bravo, vous êtes un expert !</p>
            <button className="btnResult success">Niveau Suivant</button>
          </Fragment>
        )
      }
    </Fragment>
    <div className="stepsBtnContainer">
        
      </div>
      <div className="percentage">
        <div className="progressPercent">Réussite: 10%</div>
        <div className="progressPercent">Note: 10/10</div>
      </div>
  )
  :
  (
    <Fragment>
      
    </Fragment>
  )

  // Get id, questions and answer from state
  const questionAnswer = asked.map( question => {
    return (
      <tr key={question.id}>
        <td>{question.question}</td>
        <td>{question.answer}</td>
        <td>
          <button className="btnInfo">Infos</button>
        </td>
      </tr>
    )
  })

  return (
    <Fragment>
      
      { decicion }

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
            { questionAnswer }
          </tbody>
        </table>
      </div>
    </Fragment>
  )
})

 
// React.memo called to prevent execution of unnecessary functions 
export default React.memo(QuizOver)
