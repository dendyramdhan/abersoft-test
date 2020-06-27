import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {IconBack} from '../../../assets';

export default function Header({onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <IconBack />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
    paddingVertical: 28,
  },
});
