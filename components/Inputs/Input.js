import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components/native';
import { View, TextInput } from 'react-native';
import { Palette } from '../../styles';
import Typo from '../Typography';
import { Ionicons } from '@expo/vector-icons';

const StyledInput = styled(TextInput)`
  border-color: ${props => {
    if(props.isOnFocus) return (props.borderColor || {}).onFocus || Palette.secondaryAccent;
    return (props.borderColor || {}).normal || Palette.neutralLight;
  }};
  border-width: ${props => props.isOnFocus ? 1 : 1};
  align-self: stretch;
  padding-horizontal: ${props => props.pill ? 20 : 10};
  padding-vertical: 10;
  height: 45;
  border-radius: ${props => {
    if (props.pill) return 50;
    return 3;
  }};
  ${props => props.lineInput &&
    css`
      border-top-color: 0;
      border-left-color: 0;
      border-right-color: 0;
      border-radius: 0;
    `
  };
  background-color: ${props => props.backgroundColor || 'transparent'};
`;

const Container = styled(View)`
  align-self: stretch;
`;

const Label = styled(View)`
  margin-bottom: 5;
`;

class Input extends Component {
  state = {
    isOnFocus: false,
  }

  onFocusInput = (e) => {
    const { onFocus } = this.props;
    this.setState({isOnFocus: true})
    if(onFocus) onFocus(e);
  }

  onBlurInput = (e) => {
    const { onBlur } = this.props;
    this.setState({isOnFocus: false})
    if(onBlur) onBlur(e);
  }

  render() {
    const { isOnFocus } = this.state;
    const { pill, label, input, onChangeText, onBlur, meta,
    onFocus, value, type = 'text', reduxFormInput, lineInput, ...rest } = this.props;

    let inputProps = {
      onChangeText,
      onBlur: this.onBlurInput,
      onFocus: this.onFocusInput,
      value,
    };

    if(reduxFormInput) {
      inputProps = {
        onChangeText: text => {
          if(type === 'number') text = parseInt(text);
          input.onChange(text)
        },
        onBlur: (e) => {
          this.onBlurInput();
          input.onBlur(e);
        },
        onFocus: (e) => {
          this.onFocusInput();
          input.onFocus(e);
        },
        value: input.value,
      }
    }

    return (
      <Container>
      {label && (
        <Label>
          <Typo.TextBody small bold>{label}</Typo.TextBody>
        </Label>
      )}
      <StyledInput
          lineInput={lineInput}
          isOnFocus={isOnFocus}
          underlineColorAndroid='transparent'
          pill={pill}
          {...inputProps}
          {...rest}
        />
      </Container>
    );
  }
}

export default Input;