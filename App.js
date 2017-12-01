import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Main from './src/Container/main';
import configureStore from './src/Redux/configStore';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

export default App;