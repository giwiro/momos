// @flow
import type {Dispatch} from 'redux';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ErrorHandler from '../components/ErrorHandler/ErrorHandler';
import {actions as ErrorActions} from '../duck';

import type {RootState} from '../../index';

export default connect<*, *, *, *, *, *>(
  (state: RootState) => ({
    error: state.error.error,
  }),
  (dispatch: Dispatch<any>) =>
    bindActionCreators(
      {
        ...ErrorActions,
      },
      dispatch,
    ),
)(ErrorHandler);
