import React, { Fragment } from 'react'

const ProgressBar = ({idQuestion, maxQuestions}) => {
  console.log(idQuestion, maxQuestions);
  return (
    <Fragment>
      <div className="percentage">
      <div className="progressPercent">
        {`Qestion: ${idQuestion}/10`}
      </div>
      <div className="progressPercent">
        Progression: 10%
      </div>
    </div>
    <div className="progressBar">
      <div className="progressBarChange" style={{width: '10%'}}></div>
    </div>
    </Fragment>
  )
}

export default ProgressBar
