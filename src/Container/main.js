import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, } from 'react-native';
import { connect } from 'react-redux';

import List from '../Component/List';
import Input from '../Component/Input';
import Title from '../Component/Title';
import { actionCreators } from '../Redux/todo/action';

const styleSheet = StyleSheet.create({
  container: {
    flex: 1
  },
});

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
    const {todos, btList, btState} = this.props;
    console.log(this.props);
    return (
      <View style={styleSheet.container}>
        <Title>
          나의 물건을 책임져라
        </Title>
        <Input
          placeholder={'목록 만들기 임시 input'}
          onSubmitEditing={this.onAddTodo}
        />
        <View style={{flex: 8}}>
          <ScrollView>
            <List
              data={{btList, btState}}
              list={todos}
              onPressItem={this.onRemoveTodo}
              onPressList={this.onRemoveTodo}
            />
          </ScrollView>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos,
  btList: state.btList,
  btState: state.btState,
});

export default connect(mapStateToProps)(Main);