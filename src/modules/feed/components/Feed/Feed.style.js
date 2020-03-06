// @flow
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 4,
    paddingLeft: 4,
  },
  postContainer: {
    paddingTop: 8,
    paddingBottom: 4,
    paddingLeft: 8,
    paddingRight: 8,
  },
  loadingContainer: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerLoadingContainer: {
    height: 100,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  separatorContainer: {
    // height: 16,
  },
});
