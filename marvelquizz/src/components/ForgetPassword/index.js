import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { FirebaseContext } from '../Firebase'

const ForgetPassword = () => {

  const [email, setEmail] = useState('')

  const firebase = useContext(FirebaseContext)


  const handleSubmit = e => {
    e.preventDefault()
    firebase.
  }

  const disabled = email === ''

  return (
    <div className="signUpLoginBox">
      <div className="slContainer">
        <div className="formBoxLeftForget">

        </div>
        <div className="formBoxRight">
          <div className="formContent">

            <h2>Mot de passe oublié ?</h2>

            <form onSubmit={handleSubmit}>
              <div className="inputBox">
                <input onChange={e => setEmail(e.target.value)} value={email} type="email" autoComplete="off" required/>
                <label htmlFor="email">Email</label>
              </div>

            </form>
            <div className="linkContainer">
              <Link className="simpleLink" to="/login">Déjà inscrit ? Connectez-vous</Link>
            </div>

            <button disabled={disabled}>Récupérer</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgetPassword
