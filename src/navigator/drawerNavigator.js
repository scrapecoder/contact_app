import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {AddContact, Home} from 'component';
import React, {Fragment} from 'react';
import DrawerContent from './drawerContent';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const HomeStackScreen = () => (
  <Stack.Navigator
    initialRouteName="homeScreen"
    screenOptions={{
      headerShown: false,
      gestureEnabled: false,
      gestureDirection: 'horizontal',
    }}>
    <Stack.Screen name="homeScreen" component={Home} />
    <Stack.Screen name="addContact" component={AddContact} />
  </Stack.Navigator>
);

export default function DrawerNavigator() {
  const screens = [
    {
      name: 'home',
      screen: (
        <Drawer.Screen
          name="home"
          component={HomeStackScreen}
          options={{
            headerShown: false,
            title: 'home',
            iconName: 'home',
          }}
        />
      ),
    },
    {
      name: 'addContact',
      screen: (
        <Drawer.Screen
          name="addContact"
          component={AddContact}
          options={{
            headerShown: false,
            title: 'add contact',
            iconName: 'plus',
          }}
        />
      ),
    },
  ];

  return (
    <Drawer.Navigator
      initialRouteName="home"
      sceneContainerStyle={{backgroundColor: 'transparent'}}
      drawerContent={props => {
        return <DrawerContent {...props} />;
      }}
      screenOptions={{swipeEnabled: false}}>
      {screens.map((s, index) => (
        <Fragment key={index}>{s.screen}</Fragment>
      ))}
    </Drawer.Navigator>
  );
}
