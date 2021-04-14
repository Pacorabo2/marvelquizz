// Functionals import
import React, { Fragment, useEffect, useState } from 'react'
// Components import
import Loader from '../Loader'
import Modal from '../Modal'
// Esthetics import
import { GiTrophyCup } from 'react-icons/gi'

const QuizOver = React.forwardRef((props, ref) => {

  // Destructuring props
  const {levelNames, score, maxQuestions, quizLevel, percent, loadLevelQuestions} = props

  // To define an array with questions
  const [asked, setAsked] = useState([])
  
  // To listen if changes on ref
  useEffect(()=> {
    // To push in state ref.current to get questions and answers on array
    setAsked(ref.current)
  }, [ref])

  // to get average
  const averageGrade = maxQuestions / 2

  // Condition if average is not realized restart level
  if (score < averageGrade) {
    setTimeout(() => loadLevelQuestions(quizLevel), 5000)
  }

  // Condition to pass Level
  const decision = score >= averageGrade ? (
    <Fragment>
      <div className="stepsBtnContainer">
        {
          quizLevel < levelNames.length ? 
          (
            <Fragment>
              <p className="successMsg"> <GiTrophyCup size='60px'/>Bravo, passez au niveau suivant!</p>
              <button 
                className="btnResult success"
                onClick={() => loadLevelQuestions(quizLevel)}>Niveau Suivant</button>
            </Fragment>
          )
          :
          (
            <Fragment>
              <p className="successMsg">Bravo, vous êtes un expert !</p>
              <button 
                className="btnResult gameOver"
                // In case ok finished Quiz, to load the initial level questions
                onClick={() => loadLevelQuestions(0)}>Accueil</button>
            </Fragment>
          )
        }
      </div>
      <div className="percentage">
        <div className="progressPercent">Réussite: {percent}%</div>
        <div className="progressPercent">Note: {score}/{maxQuestions}</div>
      </div>
    </Fragment>
  )
  :
  (
    <Fragment>
      <div className="stepsBtnContainer">
        <p className="failureMsg">Vous avez échoué!</p>
      </div>
      <div className="percentage">
        <div className="progressPercent">Réussite: {percent}%</div>
        <div className="progressPercent">Note: {score}/{maxQuestions}</div>
      </div>
    </Fragment>
  )
  // If score is up to avergrade show responses and other thinks
  const questionAnswer = score >= averageGrade ? (
    // Get id, questions and answer from state
    asked.map( question => {
      return (
        <tr key={question.id}>
          <td>{question.question}</td>
          <td>{question.answer}</td>
          <td>
            <button 
              className="btnInfo"
              onClick={ () => showModal() }
              >Infos</button>
          </td>
        </tr>
      )
    })
  )
  :
  // If not, show 'Pas de réponses' in recap
  (
    <tr>
      <td colspan="3">
        <Loader 
          loadingMsg={"Passez ce niveau pour débloquer le niveau suivant. Recommençons!"}
          styling={{textAlign: 'center', color: 'red'}}/>
      </td>
    </tr>
  )
  
  return (
    <Fragment>
      
      { decision }

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
      <Modal/>
    </Fragment>
  )
})

 
// React.memo called to prevent execution of unnecessary functions 
export default React.memo(QuizOver)
