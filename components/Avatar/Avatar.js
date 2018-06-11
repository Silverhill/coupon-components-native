import React, { Component } from 'react';
import { View, TouchableWithoutFeedback, Image as Img } from 'react-native';
import { Image } from 'react-native-expo-image-cache';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components/native';
import { Palette } from 'coupon-components-native/styles';

const Avatar = ({ size = 50, borderColor, source, style, uri, cached = false, ...rest}) => {

  console.log(...source);
  return (
    <TouchableWithoutFeedback onPress={rest.onPress}>
      <Container size={size} borderColor={borderColor} style={style}>
        {cached && <CachedImage size={size} uri={uri} />}
        {!cached && <StyledImage size={size} resizeMode="cover" source={source} { ...rest }/>}
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

const StyledImage = styled(Img)`
  flex: 1;
  width: ${props => props.size};
  height: ${props => props.size};
`;

const CachedImage = styled(Image)`
  flex: 1;
  width: ${props => props.size};
  height: ${props => props.size};
`;

export default Avatar;