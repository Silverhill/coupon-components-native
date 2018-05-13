import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Modal, TouchableOpacity, Animated } from 'react-native';
import styled, { css } from 'styled-components/native';
import Typo from '../Typography';
import { Palette } from '../../styles';

const Action = ({ text, onPress }) => {
  return (
    <OptionContainer onPress={onPress}>
      <Typo.TextBody color={Palette.secondaryAccent.css()}>{text}</Typo.TextBody>
    </OptionContainer>
  )
};

const OptionContainer = styled(TouchableOpacity)`
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 50;
  border-top-color: ${Palette.neutral.alpha(0.5).css()};
  border-top-width: 1;
`;


class CustomAlert extends Component {
  state = {
    visible: false,
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.open !== this.props.open) {
      this.setState({ visible: nextProps.open });
    }
  }

  render() {
    const { actions, alertContent } = this.props;
    const { visible } = this.state;

    return (
      <Container>
        <Modal
          visible={visible}
          transparent
          animationType='fade'
          onShow={this.onShow}
          onDismiss={this.onDismiss}
        >
          <ContainerAlert>
            <Card>
              <TileContainer>
                {alertContent && alertContent}
              </TileContainer>

              <ActionsContainer>
                {(actions || []).map((action, i) => {
                  action.type = action.type || 'close';

                  return (
                    <Action
                      key={`alert-action-${i}`}
                      text={action.text}
                      onPress={() => {
                        if(action.onPress) action.onPress();
                        if(action.type === 'close') this.setState({ visible: false });
                      }}
                    />
                  );
                })}
              </ActionsContainer>
            </Card>
          </ContainerAlert>
        </Modal>
      </Container>
    );
  }
}

const Container = styled(View)`
  flex: 1;
  justify-content: center;
`;

const ContainerAlert = styled(View)`
  flex: 1;
  justify-content: center;
  background-color: ${Palette.dark.alpha(0.5).css()}
`;

const Card = styled(Animated.View)`
  min-height: 150;
  background-color: white;
  margin-horizontal: 40;
  box-shadow: 5px 5px 5px ${Palette.dark.alpha(0.4).css()};
  border-radius: 10;
`;

const TileContainer = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ActionsContainer = styled(View)`
  flex-direction: row;
`;

export default CustomAlert;