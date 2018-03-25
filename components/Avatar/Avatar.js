import React, { Component } from 'react';
import { View, Image } from 'react-native';
import styled, { css } from 'styled-components/native';
import { Palette } from 'coupon-components-native/styles';

const BORDER_WIDTH = 6;
const Container = styled(View)`
  background-color: ${Palette.dark};
  height: ${props => {
    if(props.borderColor) return props.size + BORDER_WIDTH;
    return props.size
  }};
  width: ${props => {
    if(props.borderColor) return props.size + BORDER_WIDTH;
    return props.size;
  }};
  border-radius: ${props => {
    if(props.borderColor) return (props.size + BORDER_WIDTH) / 2;
    return (props.size / 2);
  }};
  align-items: center;
  justify-content: center;
  ${props => {
    if(props.borderColor) {
      return css`
        border-color: ${props => props.borderColor};
        border-width: 6;
      `;
    }
  }};
`;

const StyledImage = styled(Image)`
  height: ${props => props.size};
  width: ${props => props.size};
  border-radius: ${props => (props.size / 2)};
`;

const Avatar = ({ src, size = 40, borderColor, ...rest }) => {
  return (
    <Container size={size} borderColor={borderColor}>
      <StyledImage size={size} resizeMode="cover" { ...rest } />
    </Container>
  );
};

export default Avatar;