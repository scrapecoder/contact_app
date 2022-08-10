//import liraries
import {useNavigation} from '@react-navigation/core';
import {ProfilePicSection} from 'commonComponent';
import {TYPE} from 'constant/constant';
import {theme} from 'constant/theme';
import {deleteContact} from 'firebase';
import React, {forwardRef, useImperativeHandle, useState} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {getEnumKeyByEnumValue} from 'util/utils';

const CustomButton = ({color, text, onPress}) => {
  return (
    <TouchableWithoutFeedback {...{onPress}}>
      <View style={[styles.btnStyle, {backgroundColor: color}]}>
        <Text style={{textTransform: 'capitalize', color: '#ffffff'}}>
          {text}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
// create a component
const ContactDetail = ({}, ref) => {
  const {navigate} = useNavigation();

  const [state, setState] = useState({
    modalVisible: false,
    item: {},
  });

  const closeModal = () => {
    setState({
      modalVisible: false,
      item: {},
    });
  };

  useImperativeHandle(ref, () => ({
    openModal: item => {
      setState({
        modalVisible: true,
        item: item,
      });
    },
  }));

  const {item, modalVisible} = state;

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ProfilePicSection edit={false} value={item['profilePicture']} />
            <View style={{marginVertical: '10%'}}>
              <Text
                numberOfLines={1}
                style={[styles.modalText, {fontSize: theme.textSize.l}]}>
                {item?.name}
              </Text>
              <Text
                style={[
                  styles.modalText,
                  {fontWeight: 'normal', fontSize: theme.textSize.m},
                ]}>
                {item?.phone}
              </Text>
              <Text
                style={[
                  styles.modalText,
                  {fontWeight: 'normal', fontSize: theme.textSize.m},
                ]}>
                {getEnumKeyByEnumValue(TYPE, item?.type)}
              </Text>
              <Text
                style={[
                  styles.modalText,
                  {fontWeight: 'normal', fontSize: theme.textSize.m},
                ]}>
                {item?.isWhatsapp ? 'In Whatsapp' : ''}
              </Text>

              <View
                style={{
                  marginVertical: 10,
                  backgroundColor: theme.colors.textColor,
                  height: 1,
                }}
              />

              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  justifyContent: 'space-evenly',
                }}>
                <CustomButton
                  text="edit"
                  onPress={() => {
                    closeModal();
                    navigate('addContact', {item});
                  }}
                  color={theme.colors.primary}
                />
                <CustomButton
                  text="delete"
                  onPress={() => {
                    closeModal();
                    deleteContact(item?.id);
                  }}
                  color={theme.colors.danger}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginTop: 2,
    textTransform: 'capitalize',
    color: theme.colors.textColor,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  btnStyle: {
    width: 100,
    paddingVertical: 10,
    paddingHorizontal: 5,

    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});

//make this component available to the app
export default forwardRef(ContactDetail);
