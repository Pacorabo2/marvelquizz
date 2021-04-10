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
    idQuestion: 0,
    btnDiasabled: true
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
          options: this.state.storedQuestions[this.state.idQuestion].options
        })
    }
  }

  submitAnswer = selectedAnswer => {
    
  }
  

    render() {

      // const { pseudo } = this.props.userData

      // To display options
      const displayOptions = this.state.options.map((option, index) => {
        return (
          <p key={index} 
             className="answerOptions"
             onClick={() => this.submitAnswer(option)}
             >
               {option}
             </p>
        )
      })

      console.log(displayOptions);

      return (
        <div>
          <Levels/>
          <ProgressBar/>
          <h2>{this.state.question}</h2>
          { displayOptions }
          <button className="btnSubmit" disabled={this.state.btnDiasabled}>Suivant</button>
        </div>
      )
    }
}

export default Quiz
