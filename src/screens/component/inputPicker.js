//import liraries
import {Picker} from '@react-native-picker/picker';
import {theme} from 'constant/theme';
import React from 'react';
import {View} from 'react-native';
const InputPicker = ({onPickerValueChange, name, value, placeholder, list}) => {
  return (
    <View
      style={{
        marginTop: 20,
        height: 50,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderRadius: 5,
      }}>
      <Picker
        selectedValue={value}
        onValueChange={(itemValue, itemIndex) =>
          itemValue && onPickerValueChange(name, itemValue)
        }
        style={{
          marginLeft: -15,
        }}>
        <Picker.Item
          label={placeholder}
          style={{
            fontSize: theme.textSize.m,
            fontStyle: 'normal',
            color: theme.colors.placeholder,
          }}
        />
        {list.map((item, index) => (
          <Picker.Item
            style={{
              textTransform: 'capitalize',
              fontSize: theme.textSize.m,
              fontStyle: 'normal',
            }}
            key={index}
            label={item?.label}
            value={item?.id || item?.label}
          />
        ))}
      </Picker>
    </View>
  );
};

export default InputPicker;
