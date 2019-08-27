class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteAllOptions = this.handleDeleteAllOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: ["One", "Two", "Three", "Four"]
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
    console.log(option);
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

  render() {
    const subtitle = "Put your life in the hands of computer";

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteAllOptions={this.handleDeleteAllOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h3>{props.subtitle}</h3>
    </div>
  );
};

Header.defaultProps = {
  title: "Indecision App"
};

const Action = props => {
  return (
    <div>
      <button disabled={!props.hasOptions} onClick={props.handlePick}>
        What should I do?
      </button>
    </div>
  );
};

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

const Option = props => {
  return (
    <div>
      {props.option}
      <button onClick={e => props.handleDeleteOption(props.option)}>
        Remove
      </button>
    </div>
  );
};

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

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
