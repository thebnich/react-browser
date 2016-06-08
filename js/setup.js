// @flow
'use strict';

import React, { Component } from 'react';
import ReactBrowser from './ReactBrowser';

class App extends Component {
  render() {
    return (
      <ReactBrowser />
    );
  }
}

export function setup() {
  return App;
}
