import React, { Fragment } from 'react'

const ProgressBar = ({idQuestion, maxQuestions}) => {
  
  // Function to get a percent number to 'progression'
  const getPercent = (totalQuestions, questionId) => {
    return (100/ totalQuestions) * questionId
  }

  const actualQuestion = idQuestion +1 
  const progressPercent = getPercent(maxQuestions, actualQuestion)
  
  return (
    <Fragment>
      <div className="percentage">
      <div className="progressPercent">
        {`Qestion: ${actualQuestion}/${maxQuestions}`}
      </div>
      <div className="progressPercent">
        {`Progression: ${progressPercent}%`}
      </div>
    </div>
    <div className="progressBar">
      <div className="progressBarChange" style={{width: `${progressPercent}%`}}></div>
    </div>
    </Fragment>
  )
}

export default ProgressBar
