import React from 'react';
import styled, { css } from 'styled-components/native';
import { Text } from 'react-native';

import { Palette, Typography } from '../../styles';

const Header = styled(Text)`
  font-weight: ${props => {
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
    if (props.small) return Typography.size.regular
    else if (props.lead) return Typography.size.large
    return Typography.size.medium
  }};
  ${props => props.center && css`
    text-align: center;
  `};
`;

export default Header
