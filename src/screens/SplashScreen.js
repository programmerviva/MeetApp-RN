import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useEffect} from 'react';
import {screenHeight, screenWidth} from '../utils/Constants';
import {resetAndNavigate} from '../utils/NavigationUtils';

const SplashScreen = () => {
  useEffect(() => {
    const timerId = setTimeout(() => {
      resetAndNavigate('HomeScreen');
    }, 1000);
    return () => clearTimeout(timerId);
  });

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/g.png')} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: screenWidth * 0.7,
    height: screenHeight * 0.7,
    resizeMode: 'contain',
  },
});

export default SplashScreen;
