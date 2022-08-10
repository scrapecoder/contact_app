import {theme} from 'constant/theme';
import React from 'react';
import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
export const PickerModal = ({
  visible,
  onAddPress,
  _launchCamera,
  _openGallery,
}) => {
  let textStyle = {
    marginTop: theme.spacing.m,
    textTransform: 'capitalize',
    fontSize: theme.textSize.l,
  };
  return (
    <Modal visible={visible} animationType="fade" transparent={true}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View
            style={{
              width: '100%',
              backgroundColor: '#fff',
              padding: theme.spacing.s + 10,
              height: 'auto',
            }}>
            <View
              style={{
                alignItems: 'flex-start',
              }}>
              <Text
                style={{
                  textTransform: 'capitalize',
                }}>
                {'select image'}
              </Text>
              <TouchableOpacity
                activeOpacity={0.7}
                style={{width: '100%'}}
                onPress={_launchCamera}>
                <Text style={textStyle}>{'take photo'}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                style={{width: '100%'}}
                onPress={_openGallery}>
                <Text style={textStyle}>{'choose from library'}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={onAddPress}
                style={{alignSelf: 'flex-end'}}>
                <Text
                  style={{
                    marginTop: theme.spacing.m,

                    textTransform: 'uppercase',
                    fontSize: theme.textSize.m + 1,
                  }}>
                  {'cancel'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centeredView: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
  },
  text: {
    marginTop: 10,
  },
  container2: {
    minHeight: 192,
    height: 'auto',
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
