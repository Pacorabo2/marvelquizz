import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="signUpLoginBox">
      <div className="slContainer">
        <div className="formBoxLeftLogin">

        </div>
        <div className="formBoxRight">
          <div className="formContent">

            <h2>Connexion</h2>

            <form >
              <div className="inputBox">
                <input type="email" id="email" autoComplete="off" required/>
                <label htmlFor="email">Email</label>
              </div>

              <div className="inputBox">
                <input type="password" id="password" autoComplete="off" required/>
                <label htmlFor="password">Mot de passe</label>
              </div>
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
