//import liraries
import {PickerModal} from 'commonComponent';
import React from 'react';
import {View} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const options = {
  quality: 0.8,
  storageOptions: {
    skipBackup: true,
    path: 'images',
    privateDirectory: true,
  },
};

const ProfileUpdateSelection = ({visible, onImageAdd, onAddPress}) => {
  const _launchCamera = () => {
    onAddPress();
    try {
      launchCamera(options, response => {
        console.log('response===>', response);
        if (response.didCancel) {
        } else if (response.error) {
        } else {
          onImageAdd(response?.assets[0]);
        }
      });
    } catch (e) {
      console.log('e--->', e);
    }
  };
  const _openGallery = () => {
    onAddPress();
    try {
      launchImageLibrary(options, response => {
        console.log('response===>', response);
        if (response.didCancel) {
        } else if (response.error) {
        }
        // showFlashMessage("Permissions weren't granted");
        else {
          onImageAdd(response?.assets[0]);
          // setFieldValue('image', response?.assets[0]);
        }
      });
    } catch (e) {
      console.log('e--->', e);
    }
  };

  return (
    <View style={{alignSelf: 'center'}}>
      <PickerModal
        visible={visible}
        onAddPress={onAddPress}
        _launchCamera={_launchCamera}
        _openGallery={_openGallery}
      />
    </View>
  );
};

export default ProfileUpdateSelection;
