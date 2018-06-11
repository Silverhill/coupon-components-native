import React from 'react';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo';
import { View } from 'react-native';
import { Palette } from '../../styles'

const Bar = ({ percentage = 0 }) => {
  const width = percentage * 100;
  return (
    <Container>
      <Fill
        width={width}
        colors={['#fffd35', '#ff007c']}
        start={[-1, 0]}
        end={[1, 0]}
      />
      <BackgroundBar />
    </Container>
  )
}

const Container = styled(View)`
  width: 100%;
  height: 30;
  border-radius: 10;
  flex-flow: row no-wrap;
  overflow: hidden;
`;

const Fill = styled(LinearGradient)`
  width: ${props => `${props.width}%`};
`;

const BackgroundBar = styled(View)`
  flex: 1;
  background-color: ${Palette.neutralLight};
`;

export default Bar;