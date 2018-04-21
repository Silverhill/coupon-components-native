import React, { Component } from 'react';
import { View, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { FormattedMessage } from 'react-intl'
import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components/native';

import Input from '../Inputs/Input';
import TextBody from '../Typography/TextBody';
import ButtonGradient from '../Button/ButtonGradient';
import Header from '../Typography/Header';
import { Palette } from '../../styles';

const Container = styled(KeyboardAvoidingView)`
  flex: 1;
  justify-content: space-between;
  padding-horizontal: 10;
  background-color: white;
`;

const TextCenter = styled(Header)`
  width: 100%;
  text-align: center;
  margin-top: 30;
  margin-bottom: 10;
`;

const DescriptionCenter = styled(TextBody)`
  width: 100%;
  text-align: center;
  margin-bottom: 30;
`;

const QuestionContainer = styled(View)`
`;

const StyledButton = styled(ButtonGradient)`
  margin-bottom: 10;
`;

const MetaText = styled(Header)`
  width: 100%;
  text-align: center;
  margin-vertical: 15;
`;

const BackButtonContainer = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const BackText = styled(TextBody)`
  text-align: center;
  margin-vertical: 10;
`;

const BackPreviousStep = styled(Ionicons)`
  margin-right: 10;
`;

export default class StepForm extends Component {
  _renderCurrentItem = () => {
    const { onChangeText, customInput, title, description, input, button, metaData, name, back, onBack } = this.props;

    return (
      <Container behavior='padding' keyboardVerticalOffset={ 65 }>
        <QuestionContainer>
          {metaData && <MetaText bold>{metaData}</MetaText>}
          <TextCenter>{title}</TextCenter>
          <DescriptionCenter>{description}</DescriptionCenter>

          {customInput
            ? customInput
            : (
              <Input
                placeholder={input.placeholder}
                onChangeText={onChangeText}
                autoFocus
                {...input}
              />
            )
          }

          {onBack &&
            <BackButtonContainer onPress={onBack}>
              <BackPreviousStep name="md-arrow-round-back" color={Palette.accent.css()}/>

              <BackText small highlight>
                <FormattedMessage id="component.StepForm.backStep"/>
              </BackText>
            </BackButtonContainer>
          }
        </QuestionContainer>

        <StyledButton {...button} pill />
      </Container>
    );
  }

  render() {
    return (this._renderCurrentItem());
  }
}