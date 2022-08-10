//import liraries
import {ProfileUpdateSelection} from 'commonComponent';
import {Images} from 'constant/images';
import {theme} from 'constant/theme';
import React, {Fragment, useState} from 'react';
import {Image, StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// create a component
const ProfilePicSection = ({
  value,
  imageResponse,
  edit = true,
  small = false,
}) => {
  const [visible, setVisible] = useState(false);
  const _style = small ? {height: 40, width: 40} : {height: 70, width: 70};
  const onAddPress = () => {
    setVisible(prev => !prev);
  };
  return (
    <Fragment>
      <TouchableWithoutFeedback onPress={() => setVisible(true)}>
        <View style={[styles.container, _style, {}]}>
          <View
            style={[
              styles.container,
              _style,
              {overflow: 'hidden', borderColor: theme.colors.primary},
            ]}>
            <Image
              resizeMode="cover"
              source={value ? {uri: value} : Images.default}
              style={{width: '100%', height: '100%'}}
            />
          </View>
          {edit && (
            <View
              style={[styles.pencil, {backgroundColor: theme.colors.primary}]}>
              <Icon name="pencil" color="#ffffff" size={14} />
            </View>
          )}
        </View>
      </TouchableWithoutFeedback>
      {edit && (
        <ProfileUpdateSelection
          {...{visible}}
          {...{onAddPress}}
          onImageAdd={data => {
            imageResponse(data);
          }}
        />
      )}
    </Fragment>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    padding: 2,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  pencil: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    padding: 5,
    zIndex: 10,
    borderRadius: 20,
  },
});

//make this component available to the app
export default ProfilePicSection;
