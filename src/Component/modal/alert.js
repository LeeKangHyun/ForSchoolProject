import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View } from 'react-native';

class ModalExample extends Component {
  static defaultProps = {
    visible: false
  };
  
  render() {
    const { visible, close } = this.props;
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType="fade"
          transparent={false}
          visible={visible}
          onRequestClose={() => {alert("Modal has been closed.")}}
        >
         <View style={{marginTop: 22}}>
          <View>
            <Text>Hello World!</Text>

            <TouchableHighlight>
              <Text>닫기</Text>
            </TouchableHighlight>

          </View>
         </View>
        </Modal>
      </View>
    );
  }
}

export default ModalExample;