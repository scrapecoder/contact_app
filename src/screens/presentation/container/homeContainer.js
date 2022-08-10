//import liraries
import database from '@react-native-firebase/database';
import {ContactListContainer} from 'container';
import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
// create a component
const HomeContainer = () => {
  const [contactList, setContactList] = useState([]);

  useEffect(() => {
    const onValueChange = database()
      .ref(`/contact`)
      .on('value', snapshot => {
        if (snapshot.val() !== null) {
          const list = Object.values(snapshot.val());
          const sortedList = list.sort((a, b) =>
            a?.name?.toLowerCase() > b?.name?.toLowerCase() ? 1 : -1,
          );
          setContactList(sortedList);
        } else setContactList([]);
      });

    // Stop listening for updates when no longer required
    return () => database().ref(`/contact`).off('value', onValueChange);
  }, []);

  return (
    <View style={styles.container}>
      <ContactListContainer data={contactList} />
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
export default HomeContainer;
