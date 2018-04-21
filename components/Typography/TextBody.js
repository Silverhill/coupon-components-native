import React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';

import { Palette, Typography } from '../../styles';

const TextBody = styled(Text)`
  font-weight: ${(props) => {
    if(props.light) return 300;
    else if(props.bold) return 900;
    return 'normal';
  }};
  background-color: transparent;
  color: ${props => {
    if (props.color) return props.color
    else if (props.inverted) return Palette.white
    else if (props.highlight) return Palette.accent
    else if (props.error) return Palette.error
    else if (props.secondary) return Palette.secondary
    else if (props.disabled) return Palette.neutral
    return Palette.text
  }};
  font-size: ${props => {
    if (props.small) return Typography.size.small
    else if (props.lead) return Typography.size.medium
    return Typography.size.regular
  }};
  line-height: ${props => {
    if (props.small) return '19';
    else if (props.lead) return '23';
    return '23';
  }};
  text-align: ${props => {
    if(props.center) return 'center';
    else if(props.right) return 'right';
    return 'left';
  }};
`

export default TextBody
