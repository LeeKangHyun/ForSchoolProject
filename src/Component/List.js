import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import CheckBox from 'react-native-check-box';

import Button from './IosButton';

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'whitesmoke',
    marginBottom: 5,
    padding: 15,
  },
});

class List extends Component {
  renderItem = (text, i) => {
    const {onPressItem} = this.props;
    
    return (
      <View
        style={styles.item}
        key={i}
      >
        <CheckBox
          rightText={text}
          onClick={(e) => {
            console.log(i)
          }}
        />
        <Button
          onPress={onPressItem}
          index={i}
          title={'삭제'}
        />
      </View>
    )
  };
  
  render() {
    const {list} = this.props;
  
    return (
      <View>
        {list.map(this.renderItem)}
      </View>
    )
  }
}

export default List;