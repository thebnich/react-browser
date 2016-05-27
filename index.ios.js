/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  WebView,
} from 'react-native';

class Browser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uri: 'http://www.google.com',
    };
  }

  inputText: ''

  render() {
    this.inputText = this.state.uri;

    return (
      <View style={styles.container}>
        <View style={styles.urlbar}>
          <TextInput
            style={styles.urlbarinput}
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType='url'
            onChangeText={this.onChangeText}
            onSubmitEditing={this.onSubmitEditing}
          />
        </View>
        <WebView
          source={{
            uri: this.state.uri,
            method: 'GET',
          }}
        />
      </View>
    );
  }

  onChangeText = (text) => {
    this.inputText = text;
  }

  onSubmitEditing = () => {
    this.setState({ uri: this.inputText });
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: '#eee',
  },
  urlbar: {
    padding: 10,
  },
  urlbarinput: {
    height: 30,
    backgroundColor: 'white',
    fontSize: 12,
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 5,
  },
});

AppRegistry.registerComponent('Browser', () => Browser);
