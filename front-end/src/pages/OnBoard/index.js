import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Welcome} from '../../assets';
import {Gap} from '../../components';

export default function OnBoard() {
  return (
    <View style={styles.container}>
      <Welcome style={styles.image} />
      <Gap height={20} />
      <Text style={styles.title}>Welcome to the app</Text>
      <Gap height={18} />
      <Text style={styles.content}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
        scelerisque porttitor turpis viverra lobortis convallis. Libero
        tristique donec turpis elit adipiscing sit faucibus tincidunt. Erat
        porttitor amet, nibh id lorem. Volutpat quam vestibulum egestas ut odio
        odio. Nunc non, feugiat a diam at lacus augue. Sit lacus pharetra eget
        feugiat aliquam enim adipiscing. Purus nec tortor tellus, neque montes.
        Gravida ornare eu viverra libero. Vulputate massa turpis posuere nibh
        dolor pulvinar bibendum. Viverra scelerisque ut dignissim at sit s
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  },
  image: {
    marginLeft: 23,
  },
  title: {
    alignSelf: 'center',
    fontSize: 25,
    fontFamily: 'Roboto-Regular',
    fontWeight: 'bold',
  },
  content: {
    alignSelf: 'center',
    fontSize: 12,
    fontFamily: 'Roboto-Regular',
    paddingHorizontal: 23,
    textAlign: 'center',
  },
});
