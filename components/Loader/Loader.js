import React, { Component } from 'react';
import { ActivityIndicator, View, Modal } from 'react-native';
import { Palette } from 'coupon-components-native/styles';
import styled from 'styled-components/native';

const Container = styled(View)`
  background-color: ${Palette.dark.alpha(0.6).css()};
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default class Loader extends Component {
  render(){
    const { visible = false } = this.props;
    return(
      <Modal
        visible={visible}
        animationType="fade"
        transparent={true}
      >
        <Container>
          <ActivityIndicator size="large"  color={Palette.white.css()}/>
        </Container>
      </Modal>
    )
  }

}