//import liraries
import {Input, InputPicker, ProfilePicSection} from 'commonComponent';
import {TYPE_LIST} from 'constant/constant';
import {theme} from 'constant/theme';
import {addContact, updateContact} from 'firebase';
import {Button} from 'module';
import {customAlphabet} from 'nanoid';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  Keyboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const nanoid = customAlphabet('1234567890', 6);
const WhatsappChecker = ({isSelected, onPress}) => {
  return (
    <View style={{marginTop: 20}}>
      <TouchableOpacity {...{onPress}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon
            name={isSelected ? 'checkbox-outline' : 'checkbox-blank-outline'}
            size={25}
          />
          <Text
            style={{
              marginLeft: 10,
              color: theme.colors.textColor,
              fontSize: theme.textSize.m,
            }}>
            Whatsapp
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
// create a component
const AddContactContainer = ({item}) => {
  const [state, setState] = useState({
    name: '',
    phone: '',
    type: '',
    isWhatsapp: false,
    profilePicture: '',
  });

  useEffect(() => {
    if (item) {
      setState(item);
    }
  }, [item]);
  const handleChange = (name, text) => {
    setState({
      ...state,
      [name]: text,
    });
  };
  const onPickerValueChange = (name, value) => {
    if (!value) return;
    setState({
      ...state,
      [name]: value,
    });
  };

  const validateInfo = () => {
    const {name, phone, type} = state;
    Keyboard.dismiss();
    if (!name) {
      Alert.alert('', 'please enter contact name');
      return;
    } else if (!phone) {
      Alert.alert('', 'please enter contact phone number');
      return;
    } else if (phone?.length !== 10) {
      Alert.alert('', 'please enter valid phone number');
      return;
    } else if (!type) {
      Alert.alert('', 'please select type');
      return;
    }

    item
      ? updateContact(state)
      : addContact({id: nanoid(6), isFav: false, ...state});
  };
  return (
    <View style={[styles.container, {padding: theme.spacing.m}]}>
      <ProfilePicSection
        value={state['profilePicture']}
        imageResponse={data =>
          setState({
            ...state,
            profilePicture: data?.uri,
          })
        }
      />
      <Input
        name="name"
        value={state['name']}
        keyboardType="default"
        placeholder="Enter name"
        onChangeText={text => handleChange('name', text)}
      />
      <Input
        name="phone"
        value={state['phone']}
        keyboardType="number-pad"
        placeholder="Enter phone"
        maxLength={10}
        onChangeText={text => handleChange('phone', text)}
      />
      <InputPicker
        {...{onPickerValueChange}}
        name="type"
        value={state['type']}
        placeholder="Select type"
        list={TYPE_LIST}
      />
      <WhatsappChecker
        onPress={() =>
          setState({
            ...state,
            isWhatsapp: !state.isWhatsapp,
          })
        }
        isSelected={state?.isWhatsapp}
      />

      <Button title={item ? 'update' : 'add'} onPress={validateInfo} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

//make this component available to the app
export default AddContactContainer;
