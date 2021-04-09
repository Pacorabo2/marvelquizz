import React, { Component } from 'react'

class Quiz extends Component {

    render() {

      return (
        <div>
          <h2>Pseudo: {this.props.userData.pseudo}</h2>
        </div>
      )
    }
}

export default Quiz
