import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Palette } from '../../styles'
import Typo from '../Typography'

const currentTicketType = (type = 'confirmation') => {
  switch (type) {
    case 'confirmation':
      return { name: 'ticket-confirmation', color: Palette.accent.css() };
    case 'star':
      return { name: 'ticket', color: Palette.colors.squash.css() };
    case 'account':
      return { name: 'ticket-account', color: Palette.secondaryAccent.css() };
    case 'percent':
      return { name: 'ticket-percent', color: Palette.colors.aquamarine.css() };
  }
};

const Notification = ({ title, type, status, message}) => {

  const { name, color } = currentTicketType(type);
  return (
    <Container>
      <Left>
        <IconCircleContainer>
          <Icon name={name} color={color} size={30}/>
        </IconCircleContainer>
      </Left>

      <Right>
        <Typo.Header small bold>{title}</Typo.Header>
        <Typo.TextBody small={type !== 'star'}>{message}</Typo.TextBody>
      </Right>
    </Container>
  )
};

Notification.propTypes = {
  type: PropTypes.oneOf(['star', 'confirmation', 'account', 'percent']),
}

const Container = styled(View)`
  min-height: 100;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  padding-vertical: 10;
`;
const Left = styled(View)`
  padding-horizontal: 10;
`;
const Right = styled(View)`
  padding-horizontal: 20;
  flex: 1;
`;

const Icon = styled(MaterialCommunityIcons)``;

const ICON_CONTAINER_HEIGHT = 60;
const IconCircleContainer = styled(View)`
  background-color: ${Palette.neutralLight};
  padding: 10px 10px;
  width: ${ICON_CONTAINER_HEIGHT};
  height: ${ICON_CONTAINER_HEIGHT};
  border-radius: ${ICON_CONTAINER_HEIGHT / 2};
  justify-content: center;
  align-items: center;
`;

export default Notification;