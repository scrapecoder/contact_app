//import liraries
import {MIN_HEADER_HEIGHT} from 'constant/constant';
import React, {Fragment} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LeftButton from './leftButton';

// create a component

const CustomHeader = ({isDrawer = false, title, backAction = null}) => {
  return (
    <Fragment>
      <View
        style={[
          styles.container,
          {
            paddingHorizontal: 10,
          },
        ]}>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <LeftButton {...{backAction}} {...{isDrawer}} />

          <Text
            style={{
              marginRight: 30,
              color: '#000000',
              fontSize: 16,
              textTransform: 'capitalize',
            }}>
            {title}
          </Text>
          <View />
        </View>
      </View>
    </Fragment>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    width: '100%',
    height: MIN_HEADER_HEIGHT,
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
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
export default CustomHeader;
