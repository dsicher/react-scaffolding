import React, { Component } from 'react';

import shallowCompare from 'react-addons-shallow-compare';

import Counter from './Counter/Counter';

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
      <div id={`hw`} style={{position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, backgroundColor: '#eee', textAlign: 'center'}} onClick={this.incrementCounter}>
        <span style={{fontSize: '64px', fontWeight: 800}}>Hello World</span>
        <Counter counter={this.state.counter} />
      </div>
    )
  }
}
