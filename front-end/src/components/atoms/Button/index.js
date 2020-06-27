import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function Button({type, text, onPress}) {
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.text(type)}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: (type) => ({
    backgroundColor: type === 'secondary' ? '#3549FB' : '#FFFFFF',
    paddingVertical: 7,
    paddingHorizontal: 63,
    borderRadius: 25.5,
  }),
  text: (type) => ({
    fontSize: 16.2857,
    fontWeight: '500',
    textAlign: 'center',
    color: type === 'secondary' ? '#FFFFFF' : '#000000',
    fontFamily: 'Roboto-Regular',
  }),
});
