/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer} from '@react-navigation/native';
import {NavigatorService} from 'navigator';
import React, {Fragment, useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import DrawerNavigator from './src/navigator/drawerNavigator';
import SplashScreen from './src/screens/splashScreen';

const App = () => {
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 2200);
  }, []);
  return (
    <Fragment>
      {splash ? (
        <SplashScreen />
      ) : (
        <NavigationContainer
          ref={navigatorRef => {
            NavigatorService.setContainer(navigatorRef);
          }}>
          <DrawerNavigator />
        </NavigationContainer>
      )}
    </Fragment>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
