import React from 'react'

const Modal = ({ showModal, hideModal, children }) => {
  return (
    // conditional rendering of modal if openModal is true
    showModal && (
      <div className="modalBackground" onclick={hideModal}>
        <div className="modalcontainer">
          { children }
        </div>
      </div>
    )
  )
}

export default Modal
