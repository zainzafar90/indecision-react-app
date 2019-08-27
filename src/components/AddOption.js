import React from "react";

class AddOption extends React.Component {
    constructor(props) {
      super(props);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.state = {
        error: null
      };
    }
  
    handleAddOption(e) {
      e.preventDefault();
  
      const option = e.target.elements.option.value.trim();
  
      if (option) {
        const error = this.props.handleAddOption(option);
        this.setState(() => ({ error }));
  
        if (!error) e.target.elements.option.value = "";
      }
    }
  
    render() {
      return (
        <div>
          <form onSubmit={this.handleAddOption}>
            <input type="text" name="option" />
            <button type="submit">Add Option</button>
          </form>
  
          {this.state.error && <div>{this.state.error}</div>}
        </div>
      );
    }
  }

  export default AddOption;