import React, { useState } from 'react'

const ForgetPassword = () => {

  const [email, setEmail] = useState('')

  const handleSubmit = e => {
    console.log('salut');
  }

  return (
    <div className="signUpLoginBox">
      <div className="slContainer">
        <div className="formBoxLeftForget">

        </div>
        <div className="formBoxRight">
          <div className="formContent">

            <h2>Mot de passe oublié</h2>

            <form onSubmit={handleSubmit}>
              <div className="inputBox">
                <input onChange={e => setEmail(e.target.value)} value={email} type="email" autoComplete="off" required/>
                <label htmlFor="email">Email</label>
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

export default ForgetPassword
