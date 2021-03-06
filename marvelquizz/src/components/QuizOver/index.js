// Functionals import
import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
// Components import
import Loader from '../Loader'
import Modal from '../Modal'
// Esthetics import
import { GiTrophyCup } from 'react-icons/gi'
import './quizOver.css'

const QuizOver = React.forwardRef((props, ref) => {

  // Destructuring props
  const {levelNames, score, maxQuestions, quizLevel, percent, loadLevelQuestions} = props

  // Get API KEY 
  const API_PUBLIC_KEY = process.env.REACT_APP_MARVEL_API_KEY
  
  // Define hash
  const hash = '5daddad6f060b32ee6ab13127f1df6bd'
  

  // To define an array with questions
  const [asked, setAsked] = useState([])
  
  // To define if modal is open or close
  const [openModal, setOpenModal] = useState(false)

  // To define characters data
  const [charactersInfos, setCharactersInfos] = useState([])

  // To define loading data
  const [loading, setLoading] = useState(true)
  
  // To listen if changes on ref
  useEffect(()=> {
    // To push in state ref.current to get questions and answers on array
    setAsked(ref.current)

    // To call checkDataAge function if there is existing data
    if (localStorage.getItem('marvelStorageDate')) {
      const date = localStorage.getItem('marvelStorageDate')
      checkDataAge(date)
    }
  }, [ref])

  // To verify if data > 15 days
  const checkDataAge = date => {

    const today = Date.now()
    const timeDifference = today - date
    const daysDifference = timeDifference / (1000 * 3600 * 24)

    if ( daysDifference >= 15 ) {
      localStorage.clear()
      localStorage.setItem('marvelStorageDate', Date.now())
    }
  }

  // To open the Modal
  const showModal = id => {
    setOpenModal(true)

    // To verify if data isn't in localStorage before do the API call
    if ( localStorage.getItem(id)) {

      setCharactersInfos(JSON.parse(localStorage.getItem(id))) 
      setLoading(false)

    } else {
        // Axios request on Marvel API to get characters info
        axios
        .get(`https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=${API_PUBLIC_KEY}&hash=${hash}`)
        .then( response => {
          console.log(response.data);
          setCharactersInfos(response.data)
          setLoading(false)

          // Push the response in local storage
          localStorage.setItem(id, JSON.stringify(response.data))
          // Push date in response
          if ( !localStorage.getItem('marvelStorageDate')) {
            localStorage.setItem('marvelStorageDate', Date.now())
          }
          
        })
        .catch( error => console.log(error) )
      }
    }
    


  // To close the Modal
  const hideModal = () => {
    setOpenModal(false)
    setLoading(true)
  }

  // Get the first letter on Capital
  const capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

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
              <p className="successMsg">Bravo, vous ??tes un expert !</p>
              <button 
                className="btnResult gameOver"
                // In case ok finished Quiz, to load the initial level questions
                onClick={() => loadLevelQuestions(0)}>Accueil</button>
            </Fragment>
          )
        }
      </div>
      <div className="percentage">
        <div className="progressPercent">R??ussite: {percent}%</div>
        <div className="progressPercent">Note: {score}/{maxQuestions}</div>
      </div>
    </Fragment>
  )
  :
  (
    <Fragment>
      <div className="stepsBtnContainer">
        <p className="failureMsg">Vous avez ??chou??!</p>
      </div>
      <div className="percentage">
        <div className="progressPercent">R??ussite: {percent}%</div>
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
              // Onclick event with question id in props
              onClick={ () => showModal(question.heroId) }
              >Infos</button>
          </td>
        </tr>
      )
    })
  )
  :
  // If not, show 'Pas de r??ponses' in recap
  (
    <tr>
      <td colspan="3">
        <Loader 
          loadingMsg={"Passez ce niveau pour d??bloquer le niveau suivant. Recommen??ons!"}
          styling={{textAlign: 'center', color: 'red'}}
        />
      </td>
    </tr>
  )

  const resultInModal = !loading ? 
  (
    <Fragment>
      <div className="modalHeader">
        <h2>{charactersInfos.data.results[0].name}</h2>
      </div>
      <div className="modalBody">
        <div className="comicImage">
          <img 
            src={charactersInfos.data.results[0].thumbnail.path+'.'+charactersInfos.data.results[0].thumbnail.extension} 
            alt={charactersInfos.data.results[0].name}
          />

          <p>{charactersInfos.attributionText}</p>
        </div>
        <div className="comicDetails">

        <h3>Description</h3>
        {
          charactersInfos.data.results[0].description ? 
          <p>{charactersInfos.data.results[0].description}</p>
          : <p>Description indisponnible ...</p>
        }
        <h3>Plus d'infos</h3>
        {
          charactersInfos.data.results[0].urls &&
          charactersInfos.data.results[0].urls.map((url, index) => {
            return <a 
                key={index} 
                href={url.url} 
                target="_blank" 
                rel="noopener noreferrer"
                >
                  {capitalizeFirstLetter(url.type)}
                </a>
          })
        }
        </div>
      </div>
      <div className="modalFooter">
        <button className="modalBtn" onClick={hideModal}>Fermer</button>
      </div>
    </Fragment>
  )
  :
  (
    <Fragment>
      <div className="modalHeader">
        <h2>En attente de r??ponse de l'application Marvel</h2>
      </div>
      <div className="modalBody">
        <Loader/>
      </div>
    </Fragment>
  )
  return (
    <Fragment>
      
      { decision }

      <hr/>
      <p>Les r??ponses aux questions pos??es: </p>
      <div className="answerContainer">
        <table className="answers">
          <thead>
            <tr>
              <th>Questions</th>
              <th>R??ponses</th>
              <th>Infos</th>
            </tr>
          </thead>
          <tbody>
            { questionAnswer }
          </tbody>
        </table>
      </div>
      <Modal showModal={openModal} hideModal={hideModal}>
        {resultInModal}
      </Modal>
    </Fragment>
  )
})

 
// React.memo called to prevent execution of unnecessary functions 
export default React.memo(QuizOver)
