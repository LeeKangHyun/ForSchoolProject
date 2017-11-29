import React, { Component } from 'react';
import {
  TouchableOpacity,
  Button
} from 'react-native';

class IosButton extends Component {
  render() {
    const {
      onPress,
      index,
      title,
      style,
    } = this.props;
    return (
      <TouchableOpacity style={style}>
        <Button
          onPress={() => {onPress(index)}}
          title={title}
        />
      </TouchableOpacity>
    )
  }
}

export default IosButton;