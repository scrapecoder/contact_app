//import liraries
import {ContactDetail, EmptyView} from 'commonComponent';
import {theme} from 'constant/theme';
import {deleteContact, toggleFav} from 'firebase';
import React, {useRef} from 'react';
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ContactListCard = ({item, onCardPress}) => {
  const confirmation = () => {
    Alert.alert('Confirmation', 'Are you sure to delete?', [
      {
        text: 'cancel',
      },
      {
        text: 'confirm',
        onPress: () => deleteContact(item.id),
      },
    ]);
  };
  return (
    <TouchableWithoutFeedback onPress={() => onCardPress(item)}>
      <View style={styles.cardStyle}>
        <View style={{flex: 1}}>
          <Text numberOfLines={1} style={styles.cardText}>
            {item.name}
          </Text>
          <Text style={styles.cardText}>{item.phone}</Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={confirmation}>
            <View style={{padding: 10}}>
              <Icon name={'delete'} size={25} color="#ffffff" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleFav(item.id, item?.isFav)}>
            <View style={{padding: 10}}>
              <Icon
                name={item?.isFav ? 'star' : 'star-outline'}
                size={25}
                color="#ffffff"
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

// create a component
const ContactListContainer = ({data}) => {
  const modalRef = useRef(null);
  const onCardPress = item => {
    modalRef?.current?.openModal(item);
  };
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{flexGrow: 1}}
        {...{data}}
        renderItem={({item}) => (
          <ContactListCard {...{item}} {...{onCardPress}} />
        )}
        showsVerticalScrollIndicator={false}
        initialNumToRender={20}
        ListEmptyComponent={EmptyView}
        keyExtractor={item => `key${item.id}`}
      />
      <ContactDetail ref={modalRef} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  cardStyle: {
    flexDirection: 'row',
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 8,
    backgroundColor: theme.colors.primary,
  },
  cardText: {
    fontSize: theme.textSize.m,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

//make this component available to the app
export default ContactListContainer;
