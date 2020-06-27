import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

export default function Input({placeholder}) {
  return (
    <View>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#000"
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#3549FB',
    fontSize: 16.2857,
    fontFamily: 'Roboto-Regular',
    padding: 4,
  },
});
