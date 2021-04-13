import React, { useEffect } from 'react'
import Stepper from 'react-stepper-horizontal'

const Levels = ({quizLevel, levelNames}) => {
  

  useEffect(() => {
    // map on LevelNames to get levels
    const quizSteps = levelNames.map( level => ({title: level}))
  })

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
