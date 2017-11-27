import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import Main from './src/Container/main';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Main
          size={80}
          color={'darkblue'}
        />
      </View>
    );
  }
}

export default App;