// REACT / REDUX / MODULE IMPORT
import React, { Component } from 'react';
import { connect } from 'react-redux';
import shallowCompare from 'react-addons-shallow-compare';

// IMPORT ACTIONS AND CONSTANTS
import { NAME } from './constants';
import { actions } from './redux/actions';

// INTERNAL COMPONENT IMPORT
import Counter from './components/Counter/Counter';

// COMPONENT
class HelloWorld extends Component {
  incrementCounter = () => {
    this.props.dispatch(actions.incrementCounter());
  }

  render() {
    var containerStyles = {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      backgroundColor: '#eee',
      textAlign: 'center',
    };

    var titleStyles = {
      fontSize: '64px',
      fontWeight: 800,
    };

    return (
      <div id={`hw`} style={containerStyles} onClick={this.incrementCounter}>
        <span style={titleStyles}>REDUX EXAMPLE</span>
        <Counter />
      </div>
    )
  }
}

// EXPORT AND CONNECT TO REDUX
export default connect(state => (
  {
    [NAME]: state[NAME],
  }), null, null, { withRef: true },
)(HelloWorld);
