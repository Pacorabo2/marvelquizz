import React, { Component, Fragment } from 'react'
import { QuizMarvel } from '../QuizMarvel'
import Levels from '../Levels'
import ProgressBar from '../ProgressBar'
import QuizOver from '../QuizOver'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

// Configure toast
toast.configure()

class Quiz extends Component {

  state = {
    levelNames: ["debutant", "confirme", "expert"],
    quizLevel: [0],
    maxQuestions: 10,
    storedQuestions: [],
    question: null,
    options: [],
    idQuestion: 0,
    btnDiasabled: true, 
    userAnswer: null,
    score: 0,
    showWelcomeMsg: false,
    quizEnd: false
  }

  // Create a ref for good answers
  storedDataRef = React.createRef()

  // Tot get the array of 'debutant' questions
  loadQuestions = quizz => {
    const fetchedArrayQuiz = QuizMarvel[0].quizz[quizz]
    if (fetchedArrayQuiz.length >= this.state.maxQuestions) {
      // Put the array with the questions in the current ref
      this.storedDataRef.current = fetchedArrayQuiz
      console.log(this.storedDataRef.current);
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

  showWelcomeMessage = pseudo => {
    // To show once the welcome toast
    if(!this.state.showWelcomeMsg) {

      this.setState({
        showWelcomeMsg: true
      })

      toast.warn(`Bienvenue ${pseudo}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        bodyClassName: "toastify-color-welcome"
      });
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

    // get the next question and options
    if (this.state.idQuestion !== prevState.idQuestion) {
      this.setState({
        question: this.state.storedQuestions[this.state.idQuestion].question,
        options: this.state.storedQuestions[this.state.idQuestion].options,
        userAnswer: null,
        btnDiasabled: true
      })
    }

    if(this.props.userData.pseudo) {
      this.showWelcomeMessage(this.props.userData.pseudo)
    }
  }

  submitAnswer = selectedAnswer => {
    this.setState({
      userAnswer: selectedAnswer,
      btnDiasabled: false 
    })
  }

  // Function to shage QuizEnd in true
  gameOver = () => {
    this.setState({
      quizEnd: true
    })
  }

  nextQuestion = () => {
    // compare the number of questions
    if (this.state.idQuestion === this.state.maxQuestions -1) {
      // End
      this.gameOver()
    } else {
      // Increment the question
      this.setState(prevState => ({
        idQuestion: prevState.idQuestion + 1
      }))
    }

    // Get the good answer
    const goodAnswer = this.storedDataRef.current[this.state.idQuestion].answer
    // Compare userAnswer with the right answer
    if (this.state.userAnswer === goodAnswer) {
      // Increment score
      this.setState( prevState => ({
        score: prevState.score +1
      }))
      // Dislpay succes msg
      toast.success('Bravo +1', {
        position: "top-right",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        bodyClassName: "toastify-success"
      });
    } else {
      // Dislpay succes msg
      toast.error('Raté 0', {
        position: "top-right",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        bodyClassName: "toastify-error"
      });

    }
  }

    render() {

      // const { pseudo } = this.props.userData

      // To display options
      const displayOptions = this.state.options.map((option, index) => {
        return (
          <p key={index} 
             className= {`answerOptions ${this.state.userAnswer === option ? "selected" : null}`}
             onClick={() => this.submitAnswer(option)}
             >
               {option}
             </p>
        )
      })

      // Show QuizOver if game finished
      return this.state.quizEnd ? (
        <QuizOver />
      )
      :
      (
        <Fragment>
          <Levels/>
          <ProgressBar/>
          <h2>{this.state.question}</h2>
          { displayOptions }
          <button 
            className="btnSubmit" 
            disabled={this.state.btnDiasabled}
            onClick={this.nextQuestion}
          >
          Suivant
          </button>
        </Fragment>
      )
    }
}

export default Quiz
