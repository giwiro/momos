// @flow
import {StyleSheet} from 'react-native';

const LOGO_WIDTH = 250;

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 72,
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: LOGO_WIDTH,
    height: Math.round((LOGO_WIDTH * 156) / 397),
    borderWidth: 1,
    //  backgroundColor: 'red',
  },
  buttonContainer: {
    paddingTop: 130,
  },
  button: {
    height: 40,
    width: 350,
    borderRadius: 30,
  },
  linearGradient: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  backgroundVideoContainer: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  backgroundTint: {
    flex: 1,
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  backgroundVideo: {
    flex: 1,
    opacity: 0.11,
  },
});
