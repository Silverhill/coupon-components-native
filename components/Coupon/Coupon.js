import React from 'react';
import PropTypes from 'prop-types';
import { View, ImageBackground, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Palette } from '../../styles';
import { Avatar, Typo, ButtonTag } from '../index.js';
import { Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo';
import { FormattedDate } from 'react-intl';
import { statusService } from '../../../services';

const COUPON_HEIGHT = 250;
const Container = styled(View)`
  box-shadow: 5px 5px 5px ${Palette.dark.alpha(0.4).css()};
  align-self: stretch;
  border-radius: 10;
  margin-horizontal: 10;
`;

const CouponContainer = styled(TouchableOpacity)`
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

const GradientContainer = styled(LinearGradient)`
  align-self: stretch;
  paddingTop: 20;
  justify-content: space-between;
`;

const Content = styled(View)`
  margin-bottom: 5;
  padding: 0px 10px;
`;

const ContentTop = styled(LinearGradient)`
  align-self: stretch;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  flex-direction: row;
  align-items: center;
  padding-horizontal: 5px;
  padding-top: 10px;
  padding-bottom: 30px;
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
`;

const Direction = styled(Typo.TextBody)`
  margin-bottom: 10;
`;

const Title = styled(Typo.Title)`
  line-height: 22;
  margin-bottom: 10;
`;

const Coupon = ({
  image, title, maker, endAt, startAt, status = 'unavailable',
  totalCoupons = 0, onPress, address, ...rest, tagButton
}) => {
  const imageSource = image && {uri: image};
  const currentStatus = statusService.getCurrentStatus(status);

  return (
    <Container {...rest}>
      <CouponContainer onPress={onPress}>
        <LeftCouponContainer>
          <Avatar size={50} />
          <Coupons>
            <Icon size={17} name="shop" color={Palette.white.css()} />
            <Typo.TextBody inverted>{totalCoupons}</Typo.TextBody>
          </Coupons>
        </LeftCouponContainer>

        <ImageContainer
          resizeMode="cover"
          source={imageSource}
        >

        <ContentTop colors={[Palette.dark.css(), 'transparent']}>
          <SubTitle numberOfLines={1} small inverted bold>{((maker || {}).name || '').toUpperCase()}</SubTitle>
          <ButtonTag backgroundColor={currentStatus.color} title={currentStatus.label} {...tagButton}/>
        </ContentTop>

          <GradientContainer colors={['transparent', Palette.dark.css()]}>
            <Content>
              <DateText small inverted>{`${startAt} - ${endAt}`}</DateText>
              <Title small inverted>{title}</Title>
              {address && <Direction small inverted bold numberOfLines={1}>{address}</Direction>}
            </Content>
          </GradientContainer>
        </ImageContainer>
      </CouponContainer>
    </Container>
  );
};

Coupon.defaultProps = {
  onPress: () => null,
};

Coupon.propTypes = {
  image: PropTypes.any,
  avatarSource: PropTypes.any,
  title: PropTypes.string,
  endAt: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  startAt: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maker: PropTypes.object,
  totalCoupons: PropTypes.number,
};

export default Coupon;