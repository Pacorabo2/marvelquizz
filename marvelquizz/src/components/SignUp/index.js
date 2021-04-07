import React, { useState, useContext } from 'react'
// Import context
import { FirebaseContext } from '../Firebase'

const SignUp = () => {

  // get context of Firebase context
  const firebase = useContext(FirebaseContext)

  console.log(firebase);

  // State initialisation
  const data = {
    pseudo: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  // State declaration
  const [loginData, setLoginData] = useState(data)

  // State Error declaration
  const [error, setError] = useState('')

  // Get input value on state
  const handleChange = e => {
    setLoginData({...loginData, [e.target.id]: e.target.value})
  }


  // Get informations of form
  const handleSubmit = e => {
    e.preventDefault();
  
    // Destructuring state object
    const { email, password } = loginData
  
    // send email and password to signupUser method on firebase
    firebase.signupUser(email, password)
    // console.log(firebase.signupUser);
    .then(user => {
      // Emptying values on form
      setLoginData({...data})
    })
    .catch(error => {
      setError(error)
      // Emptying values on form
      setLoginData({...data})
    })
  }

  // Destructuring loginData
  const { pseudo, email, password, confirmPassword } = loginData

  // Conditional rendering of btn 
  const btn = pseudo === '' || email === '' || password === '' || password !== confirmPassword 
  ? <button disabled>Inscription</button> : <button >Inscription</button> 

  // Errors handle
  const errorMsg = error !== '' && <span>{error.message}</span>

  return (
    <div className="signUpLoginBox">
      <div className="slContainer">
        <div className="formBoxLeftSignup">

        </div>
        <div className="formBoxRight">
          <div className="formContent">

          {errorMsg}

            <h2>Inscription</h2>

            <form onSubmit={handleSubmit}>
            
              <div className="inputBox">
                <input onChange={handleChange} value={pseudo} type="text" id="pseudo" autoComplete="off" required/>
                <label htmlFor="pseudo">Pseudo</label>
              </div>

              <div className="inputBox">
                <input onChange={handleChange} value={email} type="email" id="email" autoComplete="off" required/>
                <label htmlFor="email">Email</label>
              </div>

              <div className="inputBox">
                <input onChange={handleChange} value={password} type="password" id="password" autoComplete="off" required/>
                <label htmlFor="password">Mot de passe</label>
              </div>

              <div className="inputBox">
                <input onChange={handleChange} value={confirmPassword} pe="password" id="confirmPassword" autoComplete="off" required/>
                <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
              </div>

              {btn}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
