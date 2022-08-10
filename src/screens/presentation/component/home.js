//import liraries
import {useNavigation} from '@react-navigation/core';
import {theme} from 'constant/theme';
import {HomeContainer} from 'container';
import {Header} from 'module';
import React from 'react';
import {StatusBar, StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Fab = ({onPress}) => {
  return (
    <TouchableOpacity {...{onPress}}>
      <View style={styles.fabStyle}>
        <Icon size={25} name="plus" color="#ffffff" />
      </View>
    </TouchableOpacity>
  );
};

// create a component
const Home = () => {
  const {navigate} = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <Header title="home" isDrawer />
      <HomeContainer />
      <Fab onPress={() => navigate('addContact')} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fabStyle: {
    width: 50,
    height: 50,
    position: 'absolute',
    bottom: 10,
    right: 10,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.appColor,
  },
});

//make this component available to the app
export default Home;
