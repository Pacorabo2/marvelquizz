import React, { useState, Fragment } from 'react'
import Logout from '../Logout'
import Quiz from '../Quiz'

const Welcome = () => {

  // Initialise userSession state
  const [userSession, setUserSession] = useState(null)

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
