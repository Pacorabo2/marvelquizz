import React, { useState } from 'react'

const SignUp = () => {

  // State initialisation
  const data = {
    pseudo: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  // State declaration
  const [loginData, setLoginData] = useState(data)

  // Get input value on state
  const handleChange = e => {
    setLoginData({...loginData, [e.target.id]: e.target.value})
  }

  // Destructuring loginData
  const { pseudo, email, password, confirmPassword } = loginData

  // Conditional rendering of btn 
  const btn = pseudo === '' || email === '' || password === '' || password !== confirmPassword 
  ? <button disabled>Inscription</button> : <button >Inscription</button> 

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
