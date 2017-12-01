import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import CheckBox from 'react-native-check-box';

import Button from './IosButton';

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    backgroundColor: 'whitesmoke',
    marginBottom: 5,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class List extends Component {
  renderItem = data => {
    const {onPressItem} = this.props;
    const {btList, btState} = data;
  
    btList.map((list) => {
    
    })
    // return (
    //   <View
    //     style={styles.item}
    //     key={i}
    //   >
    //     <CheckBox
    //       rightText={text}
    //       onClick={(e) => {
    //         console.log(i)
    //       }}
    //       style={{
    //         flex: 3
    //       }}
    //     />
    //     <View
    //       style={{
    //         flex: 1,
    //         backgroundColor: 'skyblue'
    //       }}
    //     >
    //       <Button
    //         onPress={onPressItem}
    //         index={i}
    //         title={'삭제'}
    //       />
    //     </View>
    //   </View>
    // )
  };
  
  
  
  render() {
    const { data } = this.props;
    console.log(data);
    return (
      <View>
        {this.renderItem(data)}
      </View>
    )
  }
}

export default List;