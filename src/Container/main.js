import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

import List from '../Component/List'
import Input from '../Component/Input'
import Title from '../Component/Title'

class Main extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      todos: ['Click to remove', 'Learn React Native', 'Write Code', 'Ship App'],
    };
  }
  
  
  onAddTodo = (text) => {
    const {todos} = this.state;
    
    this.setState({
      todos: [text, ...todos],
    })
  };
  
  onRemoveTodo = (index) => {
    const {todos} = this.state;
    
    this.setState({
      todos: todos.filter((todo, i) => i !== index),
    })
  };
  
  render() {
    const {todos} = this.state;
    return (
      <View>
        <Title>
          To-Do List
        </Title>
        <Input
          placeholder={'Type a todo, then hit enter!'}
          onSubmitEditing={this.onAddTodo}
        />
        <List
          list={todos}
          onPressItem={this.onRemoveTodo}
        />
      </View>
    )
  }
}

export default Main;