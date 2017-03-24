// REACT / REDUX / MODULE IMPORT
import React, { Component } from 'react';
import { connect } from 'react-redux';

// IMPORT COMPONENT W REDUX SO YOU CAN USE ITS CONSTANTS TO GET THE REDUX STATE
import * as HelloWorld from '../../';

// COMPONENT
class Counter extends Component {
  render() {
    var local_redux_state = this.props[HelloWorld.constants.NAME];

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
    }
    return (
      <div style={counterStyles}>
        {`You have clicked ${local_redux_state.counter} times`}
      </div>
    )
  }
}

// EXPORT AND CONNECT TO REDUX
export default connect(state => (
  {
    [HelloWorld.constants.NAME]: state[HelloWorld.constants.NAME],
  }), null, null, { withRef: true },
)(Counter);
