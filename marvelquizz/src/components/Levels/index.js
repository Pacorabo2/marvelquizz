import React from 'react'
import Stepper from 'react-stepper-horizontal'

const Levels = () => {
  return (
    <div className="levelsContainer">
      {/* <h2 className="headingLevels">Débutant</h2> */}
      <div>
        <Stepper 
          steps={ [
            {title: 'Step One'}, 
            {title: 'Step Two'}, 
            {title: 'Step Three'}
            ] } 
          activeStep={ 1 } 
        />
      </div>
    </div>
  )
}

export default Levels
