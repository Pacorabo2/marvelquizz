// Functionals import
import React, { Component, Fragment } from 'react'
import { toast } from 'react-toastify'
// Components import
import Levels from '../Levels'
import ProgressBar from '../ProgressBar'
import QuizOver from '../QuizOver'
// Data import
import { QuizMarvel } from '../QuizMarvel'
// Esthetics import
import { FaChevronRight } from 'react-icons/fa'
import 'react-toastify/dist/ReactToastify.css';

// Configure toast
toast.configure()

// Define initialState
const initialState = {
    quizLevel: 0,
    maxQuestions: 10,
    storedQuestions: [],
    question: null,
    options: [],
    idQuestion: 0,
    btnDiasabled: true, 
    userAnswer: null,
    score: 0,
    showWelcomeMsg: false,
    quizEnd: false,
    percent: null
}

const levelNames = ["debutant", "confirme", "expert"]


class Quiz extends Component {

  constructor(props) {
    super(props)
    // Put on the state the initialState
    this.state = initialState
    // Create a ref for good answers
    this.storedDataRef = React.createRef()
  }


  // Tot get the array of 'debutant' questions
  loadQuestions = quizz => {
    const fetchedArrayQuiz = QuizMarvel[0].quizz[quizz]
    if (fetchedArrayQuiz.length >= this.state.maxQuestions) {
      // Put the array with the questions in the current ref
      this.storedDataRef.current = fetchedArrayQuiz
      // To get a new array without answer
      const newArray = fetchedArrayQuiz.map(({answer, ...keepRest}) => keepRest)
      // Push new array in state
      this.setState({ storedQuestions: newArray })
    }
  }

  showToastMsg = pseudo => {
    // To show once the welcome toast
    if(!this.state.showWelcomeMsg) {

      this.setState({ showWelcomeMsg: true })

      toast.warn(`Bienvenue ${pseudo}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        bodyClassName: "toastify-color-welcome",
        percent: ''
      });
    }
  }

  // To load the Questions and push in an array on state
  componentDidMount() {
    this.loadQuestions(levelNames[this.state.quizLevel])
  }

  // To push questions and options in State
  componentDidUpdate(prevProps, prevState) {
    // Destructuring state
    const {
      maxQuestions,
      storedQuestions,
      idQuestion,
      score,
      quizEnd } = this.state

    if ((storedQuestions !== prevState.storedQuestions) && storedQuestions.length) {
        this.setState({
          question: storedQuestions[idQuestion].question,
          options: storedQuestions[idQuestion].options
        })
    }

    if (quizEnd !== prevState.quizEnd ) {
      // Assign score in variable
    const gradePercent = this.getPercentage(maxQuestions, score)
    // Condition to skip to next level and store score in state or do the same without skip level
    this.gameOver(gradePercent)
    }

    // get the next question and options
    if ((idQuestion !== prevState.idQuestion) && storedQuestions.length) {
      this.setState({
        question: storedQuestions[idQuestion].question,
        options: storedQuestions[idQuestion].options,
        userAnswer: null,
        btnDiasabled: true
      })
    }

    if(this.props.userData.pseudo !== prevProps.userData.pseudo) {
      this.showToastMsg(this.props.userData.pseudo)
    }
  }

  submitAnswer = selectedAnswer => {
    this.setState({
      userAnswer: selectedAnswer,
      btnDiasabled: false 
    })
  }

  // Method to get percent of good ansWers
  getPercentage = (maxQuest, ourScore) => (ourScore / maxQuest) * 100

  // Function to change QuizEnd in true
  gameOver = percent => {
    console.log(this.state.score);
    
    if (percent >= 50 ) {
      this.setState({
        quizLevel: this.state.quizLevel + 1, 
        percent
      })
    } else {
      this.setState({ percent })
    }
  }

  nextQuestion = () => {
    // compare the number of questions
    if (this.state.idQuestion === this.state.maxQuestions - 1) {
      // End of Quiz
      this.setState({ quizEnd: true })
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
      this.setState( prevState => ({ score: prevState.score + 1 }))
      // Dislpay succes msg
      toast.success('Bravo + 1', {
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

  // To load questions of next level
  loadLevelQuestions = param => {
    // change quizLevel value
    this.setState({...initialState, quizLevel: param})
    // Load Questions of the level defined
    this.loadQuestions(levelNames[param])
  }

    render() {

      // Destructuring state
      const {
        quizLevel,
        maxQuestions,
        question,
        options,
        idQuestion,
        btnDiasabled, 
        userAnswer,
        score,
        quizEnd,
        percent } = this.state
      


      // To display options
      const displayOptions = options.map((option, index) => {
        return (
          <p key={index} 
             className= {`answerOptions ${userAnswer === option ? "selected" : null}`}
             onClick={() => this.submitAnswer(option)}
             >
             <FaChevronRight />  {option}
             </p>
        )
      })

      // Show QuizOver if game finished
      return quizEnd ? (
        <QuizOver 
          ref={this.storedDataRef}
          levelNames={levelNames}
          score={score}
          maxQuestions={maxQuestions}
          quizLevel={quizLevel}
          percent={percent}
          loadLevelQuestions={this.loadLevelQuestions}
        />
      )
      :
      (
        <Fragment>
          <Levels levelNames={levelNames} quizLevel={quizLevel}/>
          <ProgressBar idQuestion={idQuestion} maxQuestions={maxQuestions}/>
          <h2>{question}</h2>
          { displayOptions }
          <button 
            className="btnSubmit" 
            disabled={btnDiasabled}
            onClick={this.nextQuestion}
          >
          {idQuestion < maxQuestions - 1 ? "Suivant" : "Terminer" }
          </button>
        </Fragment>
      )
    }
}

export default Quiz
