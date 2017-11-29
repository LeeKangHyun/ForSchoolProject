import React, { Component } from 'react';
import { View, ScrollView, } from 'react-native';
import { connect } from 'react-redux';

import List from '../Component/List';
import Input from '../Component/Input';
import Title from '../Component/Title';
import { actionCreators } from '../Redux/todo/action';

class Main extends Component {
  onAddTodo = (text) => {
    const {dispatch} = this.props;
    
    dispatch(actionCreators.add(text))
  };
  
  onRemoveTodo = (index) => {
    const {dispatch} = this.props;
    
    dispatch(actionCreators.remove(index))
  };
  
  render() {
    const {todos} = this.props;
    return (
      <ScrollView>
        <Title>
          To-Do List
        </Title>
        <Input
          placeholder={'목록 만들기 임시 input'}
          onSubmitEditing={this.onAddTodo}
        />
        <List
          list={todos}
          onPressItem={this.onRemoveTodo}
        />
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos
});

export default connect(mapStateToProps)(Main);