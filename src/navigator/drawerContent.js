//import liraries
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {RoundedIcon} from 'module';
import React, {Fragment} from 'react';
import {SafeAreaView, Text, View} from 'react-native';

// create a component
const DrawerContent = props => {
  const {state, descriptors, navigation} = props;

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <DrawerContentScrollView>
          <Fragment>
            {state.routes.map((item, index) => {
              var option = descriptors[item.key].options;
              isFocused = index == state.index;

              return (
                <DrawerItem
                  key={index}
                  index={index}
                  style={{
                    backgroundColor: null,
                  }}
                  icon={({size}) => (
                    <RoundedIcon
                      name={option.iconName}
                      size={size}
                      backgroundColor={'transparent'}
                      color="#000"
                    />
                  )}
                  label={() => (
                    <Text
                      key={index}
                      style={{
                        fontFamily: 'Geometria-Medium',
                        textTransform: 'capitalize',
                      }}>
                      {option.title}
                    </Text>
                  )}
                  onPress={() => {
                    navigation.closeDrawer();
                    setTimeout(() => {
                      navigation.navigate(item.name);
                    }, 100);
                  }}
                />
              );
            })}
          </Fragment>
        </DrawerContentScrollView>
      </View>
    </SafeAreaView>
  );
};

//make this component available to the app
export default DrawerContent;
