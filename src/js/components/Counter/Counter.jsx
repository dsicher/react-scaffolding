import React, { Component } from 'react';

import shallowCompare from 'react-addons-shallow-compare';

export default class Counter extends Component {
  render() {
    var counterStyles = {
      position: 'absolute',
      top: 0,
      left: 0,
      height: '200px',
      width: '200px',
      transform: 'translate3d(-50%, -50%, 0)',
      marginLeft: '50%',
      marginTop: '25%',
      backgroundColor: 'coral',
      boxShadow: '0 0 10px black',
    }
    return (
      <div style={counterStyles}>
        {`You have clicked ${this.props.counter} times`}
      </div>
    )
  }
}
