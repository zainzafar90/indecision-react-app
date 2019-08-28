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
        {this.state.error && <div className="add-action__error">{this.state.error}</div>}

          <form  className="add-action--form" onSubmit={this.handleAddOption}>
            <input type="text" name="option" />
            <button type="submit" className="button">Add Option</button>
          </form>
  
        </div>
      );
    }
  }

  export default AddOption;