// @flow
'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Navigator
} from 'react-native';

import BrowserView from '../components/BrowserView';

export default class ReactBrowser extends Component {
  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{
          name: "browser",
          index: 0
        }}
        renderScene={(route, navigator) =>
          <BrowserView />
        }
      />
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

