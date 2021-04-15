// Functionals import
import React, { useEffect, useState } from 'react'
// Esthetics import
import Stepper from 'react-stepper-horizontal'
import './levels.css'

const Levels = ({quizLevel, levelNames}) => {

  // Define levels
  const [levels, setLevels] = useState([])
  

  useEffect(() => {
    // map on LevelNames to get levels
    const quizSteps = levelNames.map( level => ({title: level.toUpperCase()}))
    // push on state eh array 'quizSteps' with levels name
    setLevels(quizSteps)
  }, [levelNames])

  return (
    <div className="levelsContainer">
      {/* <h2 className="headingLevels">Débutant</h2> */}
        <Stepper 
          steps={ levels } 
          activeStep={ quizLevel } 
          circleTop={0}
          activeTitleColor={"#d31017"}
          activeColor={"#d31017"}
          completeTitleColor={"#E0E0E0"}
          completeColor={"#E0E0E0"}
          completeBarColor={"#E0E0E0"}
          barStyle={"dashed"}
          size={45}
          circleFontSize={20}
        />
    </div>
  )
}

export default React.memo(Levels)
