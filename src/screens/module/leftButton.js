//import liraries
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// create a component
const LeftButton = ({isDrawer, backAction}) => {
  const navigation = useNavigation();

  return (
    <View style={{}}>
      <TouchableWithoutFeedback
        style={{
          height: 30,
          width: 30,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() =>
          isDrawer
            ? navigation.openDrawer()
            : backAction
            ? backAction()
            : navigation.goBack()
        }>
        <Icon name={isDrawer ? 'menu' : 'chevron-left'} size={30} />
      </TouchableWithoutFeedback>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    // position: 'absolute',
    elevation: 5,
    backgroundColor: '#fff',
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width: 30,
    zIndex: 20,
    borderRadius: 15,
  },
  container2: {
    elevation: 5,
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    height: 30,
    width: 30,
    zIndex: 20,
    borderRadius: 15,
  },
});

//make this component available to the app
export default LeftButton;
