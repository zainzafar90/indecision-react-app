import React from "react";
import Modal from "react-modal";

const OptionModal = props => (
  <Modal
    isOpen={!!props.selectedOption}
    ariaHideApp={false}
    onRequestClose={props.handleCloseModal}
    closeTimeoutMS={200}
    className="modal"
  >
    <h3>Selected Option</h3>
    <p className="modal--body">{props.selectedOption}</p>
    <button className="button" onClick={props.handleCloseModal}>Close</button>
  </Modal>
);
export default OptionModal;
