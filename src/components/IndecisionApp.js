import React from "react";

import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import AddOption from "./AddOption";
import OptionModal from "./OptionModal";

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteAllOptions = this.handleDeleteAllOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.state = {
      options: [],
      selectedOption: undefined
    };
  }

  componentDidMount() {
    const options = JSON.parse(localStorage.getItem("options")) || [];
    this.setState(() => ({ options }));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      localStorage.setItem("options", JSON.stringify(this.state.options));
    }
  }

  handleDeleteAllOptions() {
    this.setState(() => ({ options: [] }));
  }

  handlePick() {
    const index = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[index];
    this.setState(() => ({ selectedOption: option }));
  }

  handleAddOption(option) {
    if (!option) {
      return "Enter valid option to add one.";
    } else if (this.state.options.indexOf(option) > -1) {
      return "Option cannot be duplicated.";
    }

    this.setState(prevState => ({ options: [...prevState.options, option] }));
  }

  handleDeleteOption(option) {
    this.setState(prevState => ({
      options: prevState.options.filter(o => o !== option)
    }));
  }

  handleCloseModal() {
    this.setState(() => ({ selectedOption: undefined }));
  }

  render() {
    const subtitle = "Put your life in the hands of computer";

    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />

          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteAllOptions={this.handleDeleteAllOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>

        <OptionModal
          selectedOption={this.state.selectedOption}
          handleCloseModal={this.handleCloseModal}
        />
      </div>
    );
  }
}

export default IndecisionApp;
