//import liraries
import {theme} from 'constant/theme';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
// create a component
const EmptyView = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: theme.colors.textColor, fontSize: theme.textSize.m}}>
        No Contacts Saved
      </Text>
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
});

//make this component available to the app
export default EmptyView;
