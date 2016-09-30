import React, { Component } from 'react';

import shallowCompare from 'react-addons-shallow-compare';

export default class HelloWorld extends Component {
  render() {
    return (
      <div id={`hw`}>
        "Hello World"
      </div>
    )
  }
}
