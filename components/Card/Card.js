import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import styled, { css } from 'styled-components/native';
import uuid from 'uuid/v4';

import { Palette } from '../../styles';

const Container = styled(View)`
  background-color: white;
  flex: 1;
  align-self: stretch;
  padding-horizontal: 10;
  padding-vertical: 10;
  box-shadow: 5px 5px 5px ${Palette.dark.alpha(0.4)};
  border-radius: 10;
  ${props => props.centerItemsVertical && css`
    justify-content: center;
  `};
  ${props => props.centerItemsHorizontal && css`
    align-items: center;
  `};
  ${props => props.height && css`
    height: ${props.height};
  `};
`;

const Card = ({children, marginBetweenChildrens, centerItemsVertical, centerItemsHorizontal, height, ...rest}) => {

  let currentChildren = children;

  if(marginBetweenChildrens) {
    const totalChildren = React.Children.count(children) - 1;
    currentChildren = React.Children.toArray(children)
      .map((child, i) => {
        const Component = styled(child.type)`
          ${i !== totalChildren && css`margin-bottom: 10`};
          ${child.type.name === 'Button' && css`width: 100%`};
          ${child.type.name === 'ButtonGradient' && css`width: 100%`};
        `;

        return <Component key={uuid()} {...child.props} />
      })
  }

  return(
    <Container height={height} centerItemsVertical={centerItemsVertical} centerItemsHorizontal={centerItemsHorizontal}>
      {currentChildren}
    </Container>
  );
}

Card.propTypes = {
  children: PropTypes.any,
  marginBetweenChildrens: PropTypes.bool,
  centerItemsVertical: PropTypes.bool,
  centerItemsHorizontal: PropTypes.bool,
}

export default Card;