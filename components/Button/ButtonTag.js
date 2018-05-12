import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components/native';
import { TouchableOpacity, View } from 'react-native';
import { Palette } from '../../styles';
import Typo from '../Typography';
import { Ionicons } from '@expo/vector-icons';

const StyledButton = styled(View)`
  height: ${props => props.big ? 35 : 20};
  background-color: ${props => {
    if (props.disabled) return Palette.neutral;
    else if (props.backgroundColor) return props.backgroundColor;
    return Palette.accent;
  }};
  border-radius: ${props => props.normal ? 3 : 50};
  justify-content: center;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-horizontal: 10;
`;

const LeftIcon = styled(Ionicons)`
  margin-right: 5;
  background-color: transparent;
`;

const RightIcon = styled(Ionicons)`
  margin-left: 5;
  background-color: transparent;
`;

const ButtonTag = ({ title, normal, big = false, backgroundColor, textColor, onPress, style, disabled, leftIcon, rightIcon, iconColor, width, ...rest }) => {
  const button = (
    <StyledButton big={big} backgroundColor={backgroundColor} normal={normal} disabled={disabled} style={disabled ? style : null}>
      {leftIcon && <LeftIcon name={leftIcon} size={10} color={iconColor ? iconColor : Palette.dark.css()} />}
      <Typo.TextBody style={{ fontSize: 10, letterSpacing: 1 }} small bold inverted color={textColor}>{title}</Typo.TextBody>
      {rightIcon && <RightIcon name={rightIcon} size={10} color={iconColor ? iconColor : Palette.dark.css()} />}
    </StyledButton>
  );

  if (disabled || !onPress) return button;
  return (
    <TouchableOpacity onPress={onPress} style={style} { ...rest }>
      {button}
    </TouchableOpacity>
  );
};


ButtonTag.defaultProps = {
  title: 'Tag',
};

ButtonTag.propTypes = {
  backgroundColor: PropTypes.any,
  textColor: PropTypes.string,
  normal: PropTypes.bool,
  onPress: PropTypes.func,
  title: PropTypes.oneOfType([ PropTypes.node, PropTypes.string ]),
  style: PropTypes.any,
  disabled: PropTypes.bool,
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
  width: PropTypes.string,
};

export default ButtonTag;
