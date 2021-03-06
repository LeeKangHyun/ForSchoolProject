import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import List from '../Component/List';
import Title from '../Component/Title';
import IosButton from '../Component/IosButton';
import ModalAdd from '../Component/modal/ModalAdd';

import { createRfid, changeRfid, removeRfid } from '../Redux/rfid/action';
import { alert_modal } from '../Redux/modal/action';

const styleSheet = StyleSheet.create({
  container: {
    flex: 1
  },
});

class Main extends Component {
  render() {
    const {
      rfid,
      changeRfid,
      removeRfid,
      alert,
      alert_modal,
    } = this.props;
    return (
      <View style={styleSheet.container}>
        <Title>
          나의 물건을 책임져라
        </Title>
        
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <IosButton
            title={"추가"}
            color={"#000"}
            onPress={() => {
              alert_modal(true)
            }}
          />
        </View>
        
        <View style={{flex: 8}}>
          <ScrollView>
            <List
              onChangeItem={changeRfid}
              onRemoveItem={removeRfid}
              data={rfid}
            />
          </ScrollView>
        </View>
        <ModalAdd visible={alert.on}/>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  rfid: state.rfid,
  alert: state.modal.alert,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    createRfid,
    changeRfid,
    removeRfid,
    alert_modal,
  }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);