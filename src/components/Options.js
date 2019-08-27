import React from "react";
import Option from "./Option";

const Options = props => {
  return (
    <div>
      {props.options.length === 0 && (
        <p>Please add an option to get started.</p>
      )}
      <button onClick={props.handleDeleteAllOptions}>Remove All</button>

      {props.options.map(option => (
        <Option
          key={option}
          option={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))}
    </div>
  );
};

export default Options;
