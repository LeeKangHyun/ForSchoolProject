import React, { Component } from 'react';
import {
  TouchableOpacity,
  Button
} from 'react-native';

class IosButton extends Component {
  static defaultProps = {
    color: 'white'
  };
  
  render() {
    const {
      onPress,
      index,
      title,
      style,
      color,
    } = this.props;
    return (
      <TouchableOpacity style={style}>
        <Button
          onPress={() => {onPress(index)}}
          title={title}
          color={color}
        />
      </TouchableOpacity>
    )
  }
}

export default IosButton;