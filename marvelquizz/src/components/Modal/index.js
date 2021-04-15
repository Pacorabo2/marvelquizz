import React from 'react'

const Modal = ({ showModal, children }) => {
  return (
    // conditional rendering of modal if openModal is true
    showModal && (
      <div className="modalBackground">
        <div className="modalContainer">
          { children }
        </div>
      </div>
    )
  )
}

export default Modal
