import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import styled from 'styled-components';
import { Size } from '../../styles';

const Container = styled(View)`
  height: 100;
  background-color: red;
  flex: 1;
`;

const NavBar = (props) => {
  return(
    <Container>
      <Text>{props.title}</Text>
    </Container>
  )
};

export default NavBar;