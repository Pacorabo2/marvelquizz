import React, { Component } from 'react'
import { QuizMarvel } from '../QuizMarvel'
import Levels from '../Levels'
import ProgressBar from '../ProgressBar'

class Quiz extends Component {

  state = {
    levelNames: ["debutant", "confirme", "expert"],
    quizLevel: [0]
  }

  // Tot get the array of 'debutant' questions
  loadQuestions = quizz => {
    const fetchedArrayQuiz = QuizMarvel[0].quizz[quizz]
  }

  // To
  componentDidMount() {
    this.loadQuestions(this.state.levelNames[this.state.quizLevel])
  }
  

    render() {

      // const { pseudo } = this.props.userData

      return (
        <div>
          <Levels/>
          <ProgressBar/>
          <h2>Notre question Quiz</h2>
          <p className="answerOptions">Question 1</p>
          <p className="answerOptions">Question 2</p>
          <p className="answerOptions">Question 3</p>
          <p className="answerOptions">Question 4</p>
          <button className="btnSubmit">Suivant</button>
        </div>
      )
    }
}

export default Quiz
