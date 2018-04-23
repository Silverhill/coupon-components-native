import React, { Component } from 'react';
import { View, Image, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
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

const Avatar = ({ size = 40, borderColor, source, ...rest }) => {
  let currentSource;
  if(source) currentSource = { source };

  return (
    <TouchableWithoutFeedback onPress={rest.onPress}>
      <Container size={size} borderColor={borderColor}>
        <StyledImage size={size} resizeMode="cover" {...currentSource} { ...rest }/>
      </Container>
    </TouchableWithoutFeedback>
  );
};

Avatar.propTypes = {
  size: PropTypes.number,
  borderColor: PropTypes.string
};

export default Avatar;