//import liraries
import {AddContactContainer} from 'container';
import {Header} from 'module';
import React from 'react';
import {StyleSheet, View} from 'react-native';
// create a component
const AddContact = ({route: {params}}) => {
  const item = params?.item || null;
  return (
    <View style={[styles.container, {}]}>
      <Header title="add contact" />
      <AddContactContainer {...{item}} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default AddContact;
