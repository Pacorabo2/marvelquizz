import React, { useState, useEffect } from 'react'

const Logout = () => {

  // Initialise state checked
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    if (checked) {
      console.log("Déconnexion");
    }
  }, [checked])

  const handlechange = event => {
    console.log(event);
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
