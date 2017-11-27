import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    fontSize: 12,
  },
});

class Main extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      count: 0,
    }
  }
  
  componentDidMount() {
    setInterval(() => {
      this.setState({
        count: this.state.count + 1,
      })
    }, 1000)
  }
  
  render() {
    const {
      color,
      size,
    } = this.props;
    const {
      count,
    } = this.state;
    return (
      <View>
        <Text style={{color, fontSize: size}}>
          {count}
        </Text>
      </View>
    )
  }
}

export default Main;