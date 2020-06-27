import React from 'react';
import {StyleSheet, Text, ImageBackground, StatusBar, View} from 'react-native';
import {BG1, BG2} from '../../assets';
import {Button, Gap} from '../../components';

export default function GetStarted({navigation}) {
  return (
    <ImageBackground source={BG1} style={styles.bg}>
      {/* <StatusBar translucent backgroundColor="transparent" /> */}
      <ImageBackground source={BG2} style={styles.page}>
        <View style={styles.content}>
          <Button
            text="Register Account"
            onPress={() => navigation.navigate('Register')}
          />
          <Gap height={44} />
          <Button text="Login" onPress={() => navigation.navigate('Login')} />
        </View>
      </ImageBackground>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  page: {
    flex: 1,
    paddingHorizontal: 54,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 80,
  },
});
