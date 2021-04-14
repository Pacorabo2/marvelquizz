import React, { useState, useEffect, useContext } from 'react'
import { FirebaseContext } from '../Firebase'
// Import tools
import ReactToolTip from 'react-tooltip'


const Logout = () => {

  // Setting context
  const firebase = useContext(FirebaseContext)

  // Initialise state checked
  const [checked, setChecked] = useState(false)


  useEffect(() => {
    if (checked) {
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
          <span className="slider round" data-tip="Déconnexion"></span>
      </label>
      <ReactToolTip
        place="left"
        effect="solid"/>
    </div>
  )
}

export default Logout
