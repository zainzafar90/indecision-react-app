import React from "react";
import Modal from "react-modal";

const OptionModal = props => (
  <Modal isOpen={!!props.selectedOption} ariaHideApp={false} onRequestClose={props.handleCloseModal}>
    <h3>Selected Option</h3>
    <p>{props.selectedOption}</p>
    <button onClick={props.handleCloseModal}>Close</button>
  </Modal>
);
export default OptionModal;
