import React from "react";

export default class StoperCompClass extends React.Component {
  intervalPtr;
  state = {
    c: 0,
  };
  componentDidMount() {
    this.intervalPtr = setInterval(() => {
      let state = { ...this.state };
      state.c++;
      this.setState(state);
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalPtr);
  }

  render() {
    return <div>{this.state.c}</div>;
  }
}
