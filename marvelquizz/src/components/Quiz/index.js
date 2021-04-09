import React, { Component } from 'react'
import { QuizMarvel } from '../QuizMarvel'
import Levels from '../Levels'
import ProgressBar from '../ProgressBar'

class Quiz extends Component {

  state = {
    levelNames: ["debutant", "confirme", "expert"],
    quizLevel: [0],
    maxQuestions: 10,
    storedQuestions: [],
    question: null,
    options: [],
    idQuestion: 0
  }

  // Tot get the array of 'debutant' questions
  loadQuestions = quizz => {
    const fetchedArrayQuiz = QuizMarvel[0].quizz[quizz]
    if (fetchedArrayQuiz.length >= this.state.maxQuestions) {
      // To get a new array without answer
      const newArray = fetchedArrayQuiz.map(({answer, ...keepRest}) => keepRest)
      // Push new array in state
      this.setState({
        storedQuestions: newArray
      })
    } else {
      console.log("Pas assez de questions !");
    }
  }

  // To
  componentDidMount() {
    this.loadQuestions(this.state.levelNames[this.state.quizLevel])
  }

  // To push questions and options in State
  componentDidUpdate(prevProps, prevState) {
    if (this.state.storedQuestions !== prevState.storedQuestions) {
        this.setState({
          question: this.state.storedQuestions[this.state.idQuestion].question,
          option: this.state.storedQuestions[this.state.idQuestion].options
        })
    }
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
