import React, { useEffect, useState } from 'react'
import Stepper from 'react-stepper-horizontal'

const Levels = ({quizLevel, levelNames}) => {

  // Define levels
  const [levels, setLevels] = useState([])
  

  useEffect(() => {
    // map on LevelNames to get levels
    const quizSteps = levelNames.map( level => ({title: level}))
    // push on state eh array 'quizSteps' with levels name
    setLevels(quizSteps)
  }, [levelNames])

  return (
    <div className="levelsContainer">
      {/* <h2 className="headingLevels">Débutant</h2> */}
        <Stepper 
          steps={ levels } 
          activeStep={ 1 } 
        />
    </div>
  )
}

export default React.memo(Levels)
