import React, { Component } from 'react';

import shallowCompare from 'react-addons-shallow-compare';

export default class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    }
  }

  incrementCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  render() {
    return (
      <div id={`hw`} style={{position: 'absolute', top: 0, left: 0, width: '1920px', height: '1080px'}} onClick={this.incrementCounter}>
        "Hello World"<br />{this.state.counter}
      </div>
    )
  }
}
