import React, { Component } from 'react';
import { View, Image, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components/native';
import { Palette } from 'coupon-components-native/styles';

const Avatar = ({ size = 50, borderColor, source, style, ...rest}) => {
  let currentSource;
  if((source || {}).uri || '') {
    currentSource = { source };
  }

  return (
    <TouchableWithoutFeedback onPress={rest.onPress}>
      <Container size={size} borderColor={borderColor} style={style}>
        <StyledImage size={size} resizeMode="cover" {...currentSource} { ...rest }/>
      </Container>
    </TouchableWithoutFeedback>
  );
};

Avatar.propTypes = {
  size: PropTypes.number,
  borderColor: PropTypes.string
};

// Styles
const BORDER_WIDTH = 6;
const Container = styled(View)`
  background-color: ${Palette.dark};
  overflow: hidden;
  height: ${props => {
    if(props.borderColor) return props.size;
    return props.size
  }};
  width: ${props => {
    if(props.borderColor) return props.size;
    return props.size;
  }};
  border-radius: ${props => {
    if(props.borderColor) return (props.size) / 2;
    return (props.size / 2);
  }};
  align-items: center;
  justify-content: center;
  ${props => {
    if(props.borderColor) {
      return css`
        border-color: ${props => props.borderColor};
        border-width: 2;
      `;
    }
  }};
`;

const StyledImage = styled(Image)`
  flex: 1;
  width: ${props => props.size};
  height: ${props => props.size};
`;

export default Avatar;