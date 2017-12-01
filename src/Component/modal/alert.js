import React, { Component } from 'react';
import {
  Modal,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { alert_modal } from '../../Redux/modal/action';

class ModalExample extends Component {
  static defaultProps = {
    visible: false
  };
  
  render() {
    const {
      visible,
      alert_modal,
    } = this.props;
    return (
      <Modal
        animationType="fade"
        visible={visible}
        transparent={true}
      >
        <View style={{
          marginTop: 22,
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }}>
          <View style={{
            height: 300,
            width: 300,
            padding: 15,
            borderWidth: 1,
            borderColor: '#efefef',
            borderRadius: 15,
            backgroundColor: '#fff',
          }}>
            <Text>입력 받기</Text>
            <TouchableWithoutFeedback onPress={() => {
              alert_modal(false)
            }}>
              <View>
                <Text>닫기</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => ({
  alert: state.modal.alert,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    alert_modal
  }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalExample);