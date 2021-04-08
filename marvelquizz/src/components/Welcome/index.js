import React, { useState, Fragment, useContext, useEffect } from 'react'
import { FirebaseContext } from '../Firebase'
import Logout from '../Logout'
import Quiz from '../Quiz'

const Welcome = props => {

  // Initialise userSession state
  const [userSession, setUserSession] = useState(null)

  // Firebase context
  const firebase = useContext(FirebaseContext)

  useEffect(() => {
    // To listen if there is a autenticated user
    let listener = firebase.auth.onAuthStateChanged(user => {
      // if not, redirect on '/'
      user ? setUserSession(user) : props.history.push('/')
    })
    return () => {
      // To cleanUp. stop the listener
      listener()
    }
  }, [])

  return userSession === null ? (
    <Fragment>
      <div className="loader"></div>
      <p className="loaderText">Loading ...</p>
    </Fragment>
  ) : (
    <div className="quiz-bg">
      <div className="container">
        <Logout/>
        <Quiz/>
      </div>
    </div>
  )
}

export default Welcome
