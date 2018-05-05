import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Typo } from 'coupon-components-native';
import { Palette } from 'coupon-components-native/styles';
import styled ,{ css } from 'styled-components/native';

const Option = styled(View)`
  background-color: white;
  padding: 20px 10px;
  margin-bottom: 5;
  border-radius: 5;

  ${props => props.cancel && css`
    background-color: white;
    margin-top: 10;
    margin-bottom: 0;
  `};
`;

const ActionSheetOption = ({ onPress, color, label, cancel = false }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Option cancel={cancel}>
        <Typo.TextBody center color={cancel ? Palette.accent.css() : Palette.secondaryAccent.css() }>{label}</Typo.TextBody>
      </Option>
    </TouchableOpacity>
  );
};

export default ActionSheetOption;