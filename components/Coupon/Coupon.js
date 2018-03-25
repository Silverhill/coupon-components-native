import React from 'react';
import PropTypes from 'prop-types';
import { View, ImageBackground } from 'react-native';
import styled from 'styled-components/native';
import { Palette } from '../../styles';
import { Avatar, Typo } from '../index.js';
import { Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo';

const COUPON_HEIGHT = 250;
const Container = styled(View)`
  box-shadow: 5px 5px 5px ${Palette.dark.alpha(0.4).css()};
  align-self: stretch;
  border-radius: 10;
  margin-horizontal: 10;
`;

const CouponContainer = styled(View)`
  overflow: hidden;
  background-color: ${Palette.dark};
  height: ${COUPON_HEIGHT};
  border-radius: 10;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const ImageContainer = styled(ImageBackground)`
  background-color: grey;
  height: ${COUPON_HEIGHT};
  border-radius: 10;
  flex: 1;
  align-items: flex-start;
  justify-content: flex-end;
`;

const Content = styled(View)`
  margin-bottom: 5;
  padding-left: 5;
`;

const LeftCouponContainer = styled(View)`
  height: ${COUPON_HEIGHT};
  padding-horizontal: 20;
  padding-vertical: 10;
  align-items: center;
  justify-content: space-between;
`;

const Coupons = styled(View)`
  flex-direction: row;
  align-items: center;
`;

const Icon = styled(Entypo)`
  margin-right: 10;
`;

const DateText = styled(Typo.TextBody)`
  margin-bottom: 10;
`;

const SubTitle = styled(Typo.TextBody)`
  margin-bottom: 10;
`;

const Coupon = ({ imageSource, avatarSource, title, subTitle, date, numberOfCoupons = 0, ...rest }) => {
  return (
    <Container {...rest}>
      <CouponContainer>
        <LeftCouponContainer>
          <Avatar
            size={50}
            source={avatarSource}
          />
          <Coupons>
            <Icon size={17} name="shop" color={Palette.white.css()} />
            <Typo.TextBody inverted>{numberOfCoupons}</Typo.TextBody>
          </Coupons>
        </LeftCouponContainer>

        <ImageContainer
          resizeMode="cover"
          source={imageSource}
        >
          <LinearGradient
            colors={['transparent', Palette.dark.css()]}
            style={{ alignSelf: 'stretch' }}>
            <Content>
              <DateText small inverted>{date}</DateText>
              <Typo.Title small inverted>{title}</Typo.Title>
              <SubTitle small inverted bold>{subTitle.toUpperCase()}</SubTitle>
            </Content>
          </LinearGradient>
        </ImageContainer>
      </CouponContainer>
    </Container>
  );
};

Coupon.propTypes = {
  imageSource: PropTypes.any,
  avatarSource: PropTypes.any,
  title: PropTypes.string,
  date: PropTypes.string,
  subTitle: PropTypes.string,
  numberOfCoupons: PropTypes.number,
}

export default Coupon;