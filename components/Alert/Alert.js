import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Modal, TouchableOpacity, Animated } from 'react-native';
import styled, { css } from 'styled-components/native';
import Typo from '../Typography';
import Button from '../Button/Button';
import { Palette } from '../../styles';

const Action = ({ text, onPress, type, template }) => {

  if(type === 'cancel') {
    return (
      <TouchableOpacity onPress={onPress}>
        <Typo.TextBody color={Palette.dark.alpha(0.6).css()}>{text}</Typo.TextBody>
      </TouchableOpacity>
    )
  } else if (type === 'template') {
    return template;
  }

  return (
    <ButtonAction pill title={text} onPress={onPress} />
  )
};

const ButtonAction = styled(Button)`
  margin-bottom: 10;
  margin-horizontal: 20;
  align-self: stretch;
`;

Action.propTypes = {
  type: PropTypes.oneOf(['cancel', 'template'])
}

class CustomAlert extends PureComponent {
  state = {
    isOpen: false,
  }

  show = () => {
    this.setState({ isOpen: true });
  }

  close = () => {
    this.setState({ isOpen: false });
  }

  render() {
    const { actions, alertContent, open } = this.props;
    console.log('RENDER');
    // TODO: WIP: haciendo nuevamente la alerta

    return (
      <Container>
        <Modal
          visible={this.state.isOpen}
          transparent
          animationType='fade'
        >
          <ContainerAlert>
            <Card>
              <TileContainer>
                {alertContent && alertContent}
              </TileContainer>

              <ActionsContainer>
                {(actions || []).map((action, i) => {
                  return (
                    <Action
                      {...action}
                      key={`alert-action-${i}`}
                      onPress={() => {
                        if(action.onPress) action.onPress();
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
  position: absolute;
`;

const ContainerAlert = styled(View)`
  flex: 1;
  justify-content: center;
  background-color: ${Palette.dark.alpha(0.5).css()}
`;

const Card = styled(Animated.View)`
  background-color: white;
  margin-horizontal: 40;
  box-shadow: 5px 5px 5px ${Palette.dark.alpha(0.4).css()};
  border-radius: 10;
  padding: 10px 10px;
`;

const TileContainer = styled(View)`
  justify-content: center;
  align-items: center;
  margin-bottom: 20;
  padding: 10px 10px;
`;

const ActionsContainer = styled(View)`
  align-items: center;
`;

export default CustomAlert;