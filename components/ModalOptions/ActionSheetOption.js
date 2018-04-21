import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Typo } from 'coupon-components-native';
import { Palette } from 'coupon-components-native/styles';
import styled ,{ css } from 'styled-components/native';

const OptionContainer = styled(View)`
  padding-vertical: 30;
  padding-horizontal: 10;
  height: 50;
  background-color: white;
  width: 100%;
  align-items: center;
  justify-content: center;
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
      <OptionContainer cancel={cancel}>
        <Typo.TextBody center color={cancel ? Palette.accent.css() : Palette.secondaryAccent.css() }>{label}</Typo.TextBody>
      </OptionContainer>
    </TouchableOpacity>
  );
};

export default ActionSheetOption;