import React, { Component } from 'react';
import { View, TouchableOpacity, ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import { Palette } from '../../styles';
import { Typo, Avatar } from '../index';
import { Ionicons } from '@expo/vector-icons';

export default class HeaderBar extends Component {
  render() {
    const { title, date = '', avatarOptions = {}, backButton, rightButton, onPressRightButton, rightButtonText, loading } = this.props;

    return(
      <Container>
        {date.length > 0 &&
          <Typo.TextBody secondary small bold>{date.toUpperCase()}</Typo.TextBody>
        }

        <HeaderContainer>
          <LeftContent>
            {backButton &&
              <TouchableOpacity onPress={loading ? null : backButton}>
                <BackPreviousStep
                  name="md-arrow-round-back"
                  color={Palette.secondaryAccent.css()}
                  size={20}
                />
              </TouchableOpacity>
            }
            <Typo.Title>{title}</Typo.Title>
          </LeftContent>

          {Object.keys(avatarOptions).length > 0 &&
            <Profile
              borderColor={Palette.primary.css()}
              {...avatarOptions}
            />
          }

          {rightButton && (
            <RightButton onPress={loading ? null : onPressRightButton}>
              {loading ? <ActivityIndicator color={Palette.accent} /> : rightButton}
            </RightButton>
          )}
        </HeaderContainer>
      </Container>
    );
  }
}

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
  position: relative;
`;

const Profile = styled(Avatar)`
  position: absolute;
  top: -10;
  right: 10;
`;

const BackPreviousStep = styled(Ionicons)`
  margin-right: 10;
`;

const LeftContent = styled(View)`
  flex-direction: row;
  align-items: center;
`;

const RightButton = styled(TouchableOpacity)`
  flex-direction: row;
  margin-right: 10;
`;