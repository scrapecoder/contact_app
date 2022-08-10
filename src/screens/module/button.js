//import liraries
import {theme} from 'constant/theme';
import React from 'react';
import {Button as RNButton, StyleSheet, View} from 'react-native';
// create a component
const Button = ({title, onPress}) => {
  return (
    <View style={styles.container}>
      <RNButton color={theme.colors.appColor} {...{title}} {...{onPress}} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
});

//make this component available to the app
export default Button;
