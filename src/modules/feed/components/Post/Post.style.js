// @flow
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 3,
  },
  avatarImage: {
    width: 48,
    height: 48,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#E8E8E8',
  },
});
