//import liraries
import React from 'react';
import {View} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// create a component
const RoundedIcon = ({
  name,
  backgroundColor,
  size,
  color,
  onPress = () => true,
}) => {
  const iconSize = size * 0.9;
  const roundSize = size * 1.3;

  return (
    <RectButton rippleColor="transparent" {...{onPress}}>
      <View
        style={[
          {
            height: roundSize,
            width: roundSize,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: roundSize / 2,
          },
          {...{backgroundColor}},
        ]}>
        <View style={[{width: iconSize, height: iconSize}, {...{color}}]}>
          {name == 'settings' || name == 'hardware' ? (
            <MaterialIcons {...{name}} size={iconSize} {...{color}} />
          ) : (
            <Icon {...{name}} size={iconSize} {...{color}} />
          )}
        </View>
      </View>
    </RectButton>
  );
};

//make this component available to the app
export default RoundedIcon;
