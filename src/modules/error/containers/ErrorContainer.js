// @flow
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ErrorHandler from '../components/ErrorHandler/ErrorHandler';
import {actions as ErrorActions} from '../duck';

import type {RootState} from '../../index';
import type {Dispatch} from 'redux';

function mapStateToProps(state: RootState) {
  return {
    error: state.error.error,
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  const b = bindActionCreators(
    {
      ...ErrorActions,
    },
    dispatch,
  );
  return b;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ErrorHandler);
