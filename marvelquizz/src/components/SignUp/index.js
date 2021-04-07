import React, { useState } from 'react'

const SignUp = () => {

  const data = {
    pseudo: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  const [loginData, setLoginData] = useState(data)

  console.log(loginData);

  const handleChange = e => {

  }

  const { pseudo, email, password, confirmPassword } = loginData;

  return (
    <div className="signUpLoginBox">
      <div className="slContainer">
        <div className="formBoxLeftSignup">

        </div>
        <div className="formBoxRight">
          <div className="formContent">

            <h2>Inscription</h2>

            <form action="">
            
              <div className="inputBox">
                <input onchange={handleChange} value={pseudo} type="text" id="pseudo" autoComplete="off" required/>
                <label htmlFor="pseudo">Pseudo</label>
              </div>

              <div className="inputBox">
                <input onchange={handleChange} value={email} type="email" id="email" autoComplete="off" required/>
                <label htmlFor="email">Email</label>
              </div>

              <div className="inputBox">
                <input onchange={handleChange} value={password} type="password" id="password" autoComplete="off" required/>
                <label htmlFor="password">Mot de passe</label>
              </div>

              <div className="inputBox">
                <input onchange={handleChange} value={confirmPassword} pe="password" id="confirmPassword" autoComplete="off" required/>
                <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
