import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Main from './src/Container/main';
import { reducer as todo } from './src/Redux/todo/reducer';
const store = createStore(todo);

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