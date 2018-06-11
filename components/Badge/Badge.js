import React, { Component } from 'react';
import { Palette } from '../../styles'
import { Svg } from 'expo';

class Badge extends Component {
  render() {
    const { size = 97, color = Palette.dark.css(), style } = this.props;

    return (
    <Svg
      style={style}
      width={size}
      height={(size + 12)}
      preserveAspectRatio="xMidYMid meet"
      viewBox="100 114 97 109"
    >
      <Svg.Path
        fill={color}
        d="M104.293381,142.754982 L146.034526,115.3227 C148.034726,114.008169 150.624861,114.008169 152.625061,115.3227 L194.366207,142.754982 C196.054386,143.864453 197.070939,145.748965 197.070939,147.769083 L197.070939,190.818186 C197.070939,192.917634 195.973593,194.864377 194.177451,195.95137 L152.436306,221.212371 C150.526544,222.368125 148.133044,222.368125 146.223282,221.212371 L104.482136,195.95137 C102.685994,194.864377 101.588648,192.917634 101.588648,190.818186 L101.588648,147.769083 C101.588648,145.748965 102.605202,143.864453 104.293381,142.754982 Z"
      />
    </Svg>
    );
  }
}

export default Badge;