import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Palette } from '../../styles';
import { Typo, Avatar } from '../index';
import { Ionicons } from '@expo/vector-icons';

const Container = styled(View)`
  background-color: ${Palette.white};
  padding-top: 30;
  padding-bottom: 10;
  padding-horizontal: 10;
  border-bottom-color: ${Palette.neutralLight};
  border-bottom-width: 1;
`;

const HeaderContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Profile = styled(Avatar)`
`;

const BackPreviousStep = styled(Ionicons)`
  margin-right: 10;
`;

const RightContent = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export default class HeaderBar extends Component {
  render() {
    const { title, date = '', avatarOptions = {}, backButton } = this.props;

    return(
      <Container>
        {date.length > 0 &&
          <Typo.TextBody secondary small bold>{date.toUpperCase()}</Typo.TextBody>
        }

        <HeaderContainer>
          <RightContent>
            {backButton &&
              <TouchableOpacity onPress={backButton}>
                <BackPreviousStep
                  name="md-arrow-round-back"
                  color={Palette.secondaryAccent.css()}
                  size={20}
                />
              </TouchableOpacity>
            }
            <Typo.Title>{title}</Typo.Title>
          </RightContent>

          {Object.keys(avatarOptions).length > 0 &&
            <Profile
              borderColor={Palette.primary.css()}
              {...avatarOptions}
            />
          }
        </HeaderContainer>
      </Container>
    );
  }
}