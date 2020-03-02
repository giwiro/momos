// @flow
import type {Dispatch} from 'redux';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ErrorHandler from '../components/ErrorHandler/ErrorHandler';
import {actions as ErrorActions} from '../duck';

import type {RootState} from '../../index';

function mapStateToProps(state: RootState) {
  return {
    error: state.error.error,
  };
}

function mapDispatchToProps(dispatch: Dispatch<any>) {
  return bindActionCreators(
    {
      ...ErrorActions,
    },
    dispatch,
  );
}

export default connect<*, *, *, *, *, *>(
  mapStateToProps,
  mapDispatchToProps,
)(ErrorHandler);
