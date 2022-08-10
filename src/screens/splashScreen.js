//import liraries
import {Images} from 'constant/images';
import {theme} from 'constant/theme';
import React, {useEffect} from 'react';
import {Image, StatusBar, StyleSheet, View} from 'react-native';
import Animated, {
  Easing,
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

// create a component
const SplashScreen = () => {
  const rotation = useSharedValue(0);
  const opacity = useSharedValue(0);

  useEffect(() => {
    rotation.value = withTiming(1, {
      duration: 2000,
      easing: Easing.inOut(Easing.ease),
    });
    opacity.value = withTiming(1, {
      duration: 2000,
      easing: Easing.inOut(Easing.ease),
    });
  }, []);

  const transformStyle = useAnimatedStyle(() => {
    const rotate = interpolate(
      rotation.value,
      [0, 1],
      [0, 360],
      Extrapolate.CLAMP,
    );
    return {transform: [{rotate: `${rotate}deg`}]};
  });
  const opacityStyle = useAnimatedStyle(() => {
    const _opacity = interpolate(
      opacity.value,
      [0, 1],
      [0, 1],
      Extrapolate.CLAMP,
    );
    return {opacity: _opacity};
  });

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'transparent'} translucent={true} />
      <Animated.View style={[styles.ring, transformStyle]}>
        <Image source={Images.logo} style={[styles.imageStyle]} />
      </Animated.View>
      <Animated.Text style={[styles.textStyle, opacityStyle]}>
        Contact App
      </Animated.Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    resizeMode: 'contain',
    width: 150,
    height: 150,
  },
  textStyle: {
    marginTop: 20,
    color: theme.colors.textColor,
    fontSize: theme.textSize.l,
    fontWeight: 'bold',
  },
});

//make this component available to the app
export default SplashScreen;
