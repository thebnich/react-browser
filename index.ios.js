'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  WebView,
} from 'react-native';

const HEADER = '#ddd';
const BG_COLOR = '#fff';
const DEFAULT_URL = 'https://www.google.com';

class Browser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: DEFAULT_URL,
      outURL: DEFAULT_URL,
      backButtonEnabled: false,
      forwardButtonEnabled: false,
      loading: true,
    };
  }

  inputText: ''
  textRef: null
  webViewRef: null

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.urlBar}>
          <TouchableHighlight
            onPress={this.goBack}
            style={this.state.backButtonEnabled ? styles.navButton : styles.disabledButton}
            underlayColor='#aaa'
          >
            <Text>{'<'}</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={this.goForward}
            style={this.state.forwardButtonEnabled ? styles.navButton : styles.disabledButton}
            underlayColor='#aaa'
          >
            <Text>{'>'}</Text>
          </TouchableHighlight>
          <TextInput
            ref={(ref) => this.textRef = ref}
            style={styles.urlBarInput}
            autoCapitalize="none"
            defaultValue={this.state.url}
            onSubmitEditing={this.onSubmitEditing}
            onChangeText={this.onChangeText}
            clearButtonMode="while-editing"
          />
        </View>
        <WebView
          ref={(ref) => this.webViewRef = ref}
          source={{uri: this.state.outURL}}
          onNavigationStateChange={this.onNavigationStateChange}
          startInLoadingState={true}
        />
      </View>
    );
  }

  onChangeText = (text) => {
    this.inputText = text;
  }

  goBack = () => {
    this.webViewRef.goBack();
  }

  goForward = () => {
    this.webViewRef.goForward();
  }

  reload = () => {
    this.webViewRef.reload();
  }

  onNavigationStateChange = (navState) => {
    this.setState({
      backButtonEnabled: navState.canGoBack,
      forwardButtonEnabled: navState.canGoForward,
      url: navState.url,
      loading: navState.loading,
    });
  }

  onSubmitEditing = () => {
    if (!/^[a-zA-Z-_]+:/.test(this.inputText)) {
      this.inputText = 'http://' + this.inputText;
    }
    this.setState({ outURL: this.inputText });
    this.textRef.blur();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: HEADER,
    paddingTop: 20,
  },
  urlBar: {
    flexDirection: 'row',
    padding: 8,
  },
  urlBarInput: {
    backgroundColor: BG_COLOR,
    borderColor: '#aaa',
    borderWidth: 0.5,
    height: 28,
    paddingLeft: 10,
    paddingTop: 3,
    paddingBottom: 3,
    flex: 1,
    fontSize: 12,
  },
  navButton: {
    width: 28,
    height: 28,
    padding: 3,
    marginRight: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: BG_COLOR,
    borderColor: '#aaa',
    borderWidth: 0.5,
    opacity: 1,
  },
  disabledButton: {
    width: 28,
    height: 28,
    padding: 3,
    marginRight: 3,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.2,
    borderColor: '#aaa',
    borderWidth: 0.5,
  },
});

AppRegistry.registerComponent('Browser', () => Browser);
