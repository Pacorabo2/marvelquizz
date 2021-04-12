import React from 'react'

const QuizOver = React.forwardRef((props, ref) => {

  console.log(props);
  console.log(ref);

  return (
    <div>
      QuizOver
    </div>
  )
})

 

export default React.memo(QuizOver)
