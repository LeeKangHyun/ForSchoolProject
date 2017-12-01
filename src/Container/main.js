import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import List from '../Component/List';
import Title from '../Component/Title';
import IosButton from '../Component/IosButton';

import { createRfid, changeRfid, removeRfid } from '../Redux/rfid/action';

const styleSheet = StyleSheet.create({
  container: {
    flex: 1
  },
});

class Main extends Component {
  state = {
    visible: false,
  };
  
  onAddRfId = () => {
    const { createRfid } = this.props;
    this.setState({visible: true})
  };
  
  render() {
    const {
      rfid,
      createRfid,
      changeRfid,
      removeRfid,
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
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  rfid: state.rfid,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    createRfid,
    changeRfid,
    removeRfid,
  }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);