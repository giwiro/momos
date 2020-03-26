// @flow
import PropTypes from 'prop-types';
import {Platform, Alert, ToastAndroid} from 'react-native';
import {usePrevious} from '../../../../utils';

type Props = {
  error?: string,
  errorUnset: () => void,
};

export default function ErrorHandler(props: Props): null {
  const {error, errorUnset} = props;
  const prevError = usePrevious(error);

  if (!prevError && typeof error === 'string') {
    if (Platform.OS === 'ios') {
      Alert.alert('Error', error, [
        {
          text: 'OK',
          onPress: () => errorUnset(),
        },
      ]);
    } else if (Platform.OS === 'android') {
      ToastAndroid.show(error, ToastAndroid.LONG);
      setTimeout(() => errorUnset(), 4500);
    }
  }

  return null;
}

ErrorHandler.propTypes = {
  error: PropTypes.string,
  errorUnset: PropTypes.func.isRequired,
};
