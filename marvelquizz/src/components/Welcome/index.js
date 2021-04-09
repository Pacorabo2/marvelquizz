import React, { useState, Fragment, useContext, useEffect } from 'react'
import { FirebaseContext } from '../Firebase'
import Logout from '../Logout'
import Quiz from '../Quiz'

const Welcome = props => {

  // Initialise userSession state
  const [userSession, setUserSession] = useState(null)

  // Firebase context
  const firebase = useContext(FirebaseContext)

  const [userData, setUserData] = useState({})

  useEffect(() => {
    // To listen if there is a autenticated user
    let listener = firebase.auth.onAuthStateChanged(user => {
      // if not, redirect on '/'
      user ? setUserSession(user) : props.history.push('/')
    })
    
    //  While user is not connected ...
    if (!!userSession) {
      // Get id from user in firebase
      firebase.user(userSession.uid)
      .get()
      // If success push data user in state object
      .then(doc => {
        if (doc && doc.exists) {
          const myData = doc.data()
          setUserData(myData)
        }
    })
    // If error clg error
    .catch(error => {
      console.log(error);
    })
    }
    
    return () => {
      // To cleanUp. stop the listener
      listener()
    }
  }, [userSession])

  return userSession === null ? (
    <Fragment>
      <div className="loader"></div>
      <p className="loaderText">Loading ...</p>
    </Fragment>
  ) : (
    <div className="quiz-bg">
      <div className="container">
        <Logout/>
        <Quiz userData={userData}/>
      </div>
    </div>
  )
}

export default Welcome
