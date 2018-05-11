import chroma from 'chroma-js';

export const colors = {
  orange: chroma('#E67543'),
  watermelon: chroma('#ff4a67'),
  green: chroma('#767B3A'),
  dark: chroma('#2d2c2d'),
  white: chroma('white'),
  black: chroma('black'),
  lightGray: chroma('#f9f9f9'),
  gray: chroma('#b7b7b3'),
  sunshineYellow: chroma('#fffd35'),
  strongPink: chroma('#ff007c'),
  facebook: chroma('#3c5899'),
  twitter: chroma('#60a9df'),
  brightBlue: chroma('#0076ff'),
  aquamarine: chroma('#02e5b0'),
  squash: chroma('#f5a623'),
};

const palette = {
  primary: colors.strongPink,
  secondary: colors.gray,
  accent: colors.watermelon,
  secondaryAccent: colors.brightBlue,

  text: colors.dark,
  invertedText: colors.white.alpha(0.9).css(),
  secondaryText: colors.dark,

  dark: colors.dark,
  neutral: colors.gray,
  white: colors.white,
  neutralLight: colors.lightGray,

  error: colors.orange,
  gradientOne: colors.sunshineYellow,
  gradientTwo: colors.strongPink,

  colors,
};

export default palette;
