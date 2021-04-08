import React, { useState, useEffect, useContext } from 'react'
import { FirebaseContext } from '../Firebase'


const Logout = () => {

  // Setting context
  const firebase = useContext(FirebaseContext)

  // Initialise state checked
  const [checked, setChecked] = useState(false)

  console.log(checked);

  useEffect(() => {
    if (checked) {
      console.log("Déconnexion");
      // Disconect user with signoutUser of firebase
      firebase.signoutUser()
    }
  }, [checked, firebase])

  const handlechange = event => {
    setChecked(event.target.checked);
  }

  return (
    <div className="logoutContainer">
      <label className="switch">
        <input 
          onChange={handlechange}
          type="checkbox" 
          checked={checked} 
          />
          <span className="slider round"></span>
      </label>
    </div>
  )
}

export default Logout
