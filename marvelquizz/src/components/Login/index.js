import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
// Import context
import { FirebaseContext } from '../Firebase'

const Login = (props) => {

  // Email state initialisation
  const [email, setEmail] = useState('')

  // Password state initialisation
  const [password, setPassword] = useState('')

  // Button state initialisation
  const [btn, setBtn] = useState(false)

  // Error state initialisation
  const [error, setError] = useState('')

  // get context of Firebase context
  const firebase = useContext(FirebaseContext)

  // conditionnal rendering btn
  useEffect(() => {
    if (password.length > 5 && email !== '') {
      setBtn(true)
    } else if (btn) {
      setBtn(false)
    }
  }, [email, password, btn])

  const handleSubmit = e => {
    e.preventDefault()
    // Send data 
    firebase.loginUser(email, password)
    .then(user => {
      console.log(user);
      // Emptying inputvalues
      setEmail('')
      setPassword('')
      // Redirecting on Welcome page
      props.history.push('/welcome')
    })
    .catch(error => {
      setError(error)
      // Emptying inputvalues
      setEmail('')
      setPassword('')
  })
}


  return (
    <div className="signUpLoginBox">
      <div className="slContainer">
        <div className="formBoxLeftLogin">

        </div>
        <div className="formBoxRight">
          <div className="formContent">

            {error !== '' && <span>{error.message}</span>}

            <h2>Connexion</h2>

            <form onSubmit={handleSubmit}>
              <div className="inputBox">
                <input onChange={e => setEmail(e.target.value)} value={email} type="email" autoComplete="off" required/>
                <label htmlFor="email">Email</label>
              </div>

              <div className="inputBox">
                <input onChange={e => setPassword(e.target.value)} value={password} type="password" autoComplete="off" required/>
                <label htmlFor="password">Mot de passe</label>
              </div>

              {btn ? <button>Connexion</button> : <button disabled>Connexion</button>}

            </form>
            <div className="linkContainer">
              <Link className="simpleLink" to="/signup">Nouveau sur Marvel Quiz ? Inscrivez-vous maintenant.</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
