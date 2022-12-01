import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <div>{this.state.count}</div>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decriment}>-</button>
      </div>
    );
  }
}

export default Counter;
