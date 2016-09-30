import React, { Component } from 'react';

import shallowCompare from 'react-addons-shallow-compare';

export default class GenericComponent extends Component {
  constructor(props) {
    super(props);
  }
  
  componentWillMount() {
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    var componentStyles = { height: `200px`,
                            width: `200px`,
                            backgroundColor: `blue` };
    return (
      <div id="generic-component" style={componentStyles}>
        hello world
      </div>
    )
  }
}
