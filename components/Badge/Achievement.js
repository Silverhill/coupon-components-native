import React from 'react';
import { View, StyleSheet } from 'react-native';
import chroma from 'chroma-js';
import Badge from './Badge';
import { Palette } from '../../styles';

const Achievement = ({ color = Palette.dark.css(), size = 100, content = null }) => {
  return (
    <View style={styles.container}>
      <View style={styles.badges}>
        <Badge
          size={size}
          color={chroma(color).alpha(0.5).css()}
          style={styles.transparentBagde}
        />
        <Badge
          size={size}
          color={color}
          style={styles.primaryBadge}
        />
      </View>
      <View style={[styles.contentTemplate, { width: size, height: (size + 12) }]}>
        {content}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    overflow: 'visible',
  },
  badges: {
    position: 'relative',
  },
  transparentBagde: {
    position: 'absolute',
    top: 0,
    left: 0
  },
  primaryBadge: {
    transform: [ {rotate: '15deg'} ],
  },
  contentTemplate: {
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
})

export default Achievement;