// Functionals import
import React from 'react'
// Esthetics import
import './modal.css'

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
