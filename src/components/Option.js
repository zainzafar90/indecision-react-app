import React from "react";

const Option = props => {
  return (
    <div className="option">
      <span className="option__text">{props.option}</span>
      <button
        className="button button--link"
        onClick={e => props.handleDeleteOption(props.option)}
      >
        Remove
      </button>
    </div>
  );
};

export default Option;
