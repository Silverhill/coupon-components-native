import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import { Typo } from '../index'
import { Size } from '../../styles';

const Container = styled(View)`
  height: ${Size.navbar};
  padding-horizontal: 10;
  backgroundColor: white;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled(Typo.Header)`
`;

const RightButton = styled(View)`

`;

const LeftContainer = styled(View)`
  width: 60;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row nowrap;
`;

const RightContainer = styled(View)`
  width: 60;
  align-items: flex-end;
`;

const CenterContainer = styled(View)`
  flex: 1;
  align-items: center;
`;

export default class TopBar extends Component {
  goBack = () => {
    const { navigation } = this.props;
    navigation.goBack()
  }

  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <LeftContainer>
          <TouchableOpacity onPress={this.goBack}>
            <Ionicons name='md-arrow-round-back' size={30} />
          </TouchableOpacity>

        </LeftContainer>

        <CenterContainer>
          <Title small bold>{navigation.state.routeName}</Title>
        </CenterContainer>

        <RightContainer />
      </Container>
    )
  }
}