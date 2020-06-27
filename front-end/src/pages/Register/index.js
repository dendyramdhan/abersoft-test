import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {Input, Button, Gap, Header} from '../../components';
import {BG1, BG2} from '../../assets';

export default function Register({navigation}) {
  return (
    <ImageBackground source={BG1} style={styles.bg}>
      <ImageBackground source={BG2} style={styles.container}>
        <Header onPress={() => navigation.goBack()} />
        <View style={styles.content}>
          <Text style={styles.title}>Register new account</Text>
          <Gap height={29} />
          <Input placeholder="Email" />
          <Gap height={15} />
          <Input placeholder="Password" />
          <Gap height={45} />
          <Button text="Create Account" type="secondary" />
        </View>
      </ImageBackground>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  content: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 51,
    borderTopRightRadius: 51,
    flex: 1,
    marginTop: 169,
    paddingTop: 34,
    paddingHorizontal: 54,
  },
  title: {
    fontSize: 23,
    fontFamily: 'Roboto-Regular',
    fontWeight: 'bold',
  },
});
