import React from "react";
import Option from "./Option";

const Options = props => {
  return (
    <div>
      
      <div className="widget-header"> 
        <h3 className="widget-header__title">Your options</h3>
        <button
          className="button button--link"
          onClick={props.handleDeleteAllOptions}
        >
          Remove All
        </button>
      </div>

      {props.options.length === 0 && (
        <p className="widget-header__get-started">Please add an option to get started.</p>
      )}

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
