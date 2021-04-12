import React, { Fragment } from 'react'

const ProgressBar = ({idQuestion, maxQuestions}) => {
  console.log(idQuestion, maxQuestions);

  const ActualQuestion = idQuestion +1 
  return (
    <Fragment>
      <div className="percentage">
      <div className="progressPercent">
        {`Qestion: ${ActualQuestion}/${maxQuestions}`}
      </div>
      <div className="progressPercent">
        {`Progression: ${ActualQuestion * maxQuestions}%`}
      </div>
    </div>
    <div className="progressBar">
      <div className="progressBarChange" style={{width: '10%'}}></div>
    </div>
    </Fragment>
  )
}

export default ProgressBar
