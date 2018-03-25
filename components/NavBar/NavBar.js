import React, { Component } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { Palette } from '../../styles';
import { Typo, Avatar } from '../index';

const Container = styled(View)`
  background-color: ${Palette.white};
  margin-top: 10;
  padding-top: 20;
  padding-horizontal: 10;
`;

const HeaderContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Profile = styled(Avatar)`
`;

export default class NavBar extends Component {
  render() {
    const { title, date = '', avatarProps = {} } = this.props;

    return(
      <Container>
        <Typo.TextBody secondary small bold>{date.toUpperCase()}</Typo.TextBody>

        <HeaderContainer>
          <Typo.Title>{title}</Typo.Title>
          {Object.keys(avatarProps).length > 0 &&
            <Profile
              borderColor={Palette.primary.css()}
              {...avatarProps}
            />
          }
        </HeaderContainer>
      </Container>
    );
  }
}