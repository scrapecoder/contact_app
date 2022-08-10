import database from '@react-native-firebase/database';
import {NavigatorService} from 'navigator';
import {Alert} from 'react-native';
/**
 *
 * @param {Object} contact
 * @param {Function} callback
 */
//create a new node into the JSON tree
export function addContact(contact, callback) {
  database()
    .ref(`/contact/${contact.id}`)
    .set(contact)
    .then(() =>
      Alert.alert('', 'contact created', [
        {text: 'ok', onPress: () => NavigatorService.goBack()},
      ]),
    )
    .catch(e => console.log('error while adding recording'));
}

/**
 *
 * @param {Object} contact
 * @param {Function} callback
 */
//update the existing node into the JSON tree
export function updateContact(contact, callback) {
  console.log('contact====>', contact);
  database()
    .ref(`/contact/${contact.id}`)
    .update(contact)
    .then(() =>
      Alert.alert('', 'contact updated', [
        {text: 'ok', onPress: () => NavigatorService.goBack()},
      ]),
    )
    .catch(e => console.log('error while updating recording'));
}

/**
 *
 * @param {Object} contact
 * @param {Function} callback
 */
//delete the target node into the JSON tree
export async function deleteContact(id, callback) {
  await database()
    .ref(`/contact/${id}`)
    .remove()
    .then(() => Alert.alert('', 'contact deleted'))
    .catch(e => console.log('error while deleting recording'));
}
/**
 *
 * @param {String} id
 * @param {Boolean} flag
 */
//toggle the favourite contact
export function toggleFav(id, flag) {
  database()
    .ref(`/contact/${id}`)
    .update({
      isFav: !flag,
    })
    .then(() => console.log('Data updated.'));
}
