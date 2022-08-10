//import liraries
import {theme} from 'constant/theme';
import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
// create a component
const Input = props => {
  return (
    <View style={styles.container}>
      <TextInput
        style={{
          marginTop: 20,
          height: 50,
          paddingHorizontal: 10,
          borderWidth: 1,
          fontSize: theme.textSize.m,
          borderRadius: 5,
        }}
        placeholderTextColor={theme.colors.placeholder}
        {...props}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {},
});

//make this component available to the app
export default Input;
