import React, { Component } from "react";

export class ClassCounter extends Component {
  constructor(props) {
    super();
    this.state = { number: 0 };
  }
  handleIncrease = () => {
    this.setState({ number: this.state.number + 1 });
  };
  handleDecrease = () => {
    this.setState({ number: this.state.number - 1 });
  };

  render() {
    return (
      <div>
        <h1>Class Counter</h1>
        <h2>COUNT: {this.state.number}</h2>
        <button onClick={this.handleDecrease}>Decrease Count</button>
        <button onClick={this.handleIncrease}>Increase Count</button>
      </div>
    );
  }
}

export default ClassCounter;
