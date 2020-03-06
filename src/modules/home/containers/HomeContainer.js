// @flow
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Home from '../components/Home/Home';
import {actions as UserActions} from '../../user/duck';

import type {Dispatch} from 'redux';
import type {RootState} from '../../index';

export default connect<*, *, *, *, *, *>(
  (state: RootState) => ({
    firstTime: state.user.firstTime,
  }),
  (dispatch: Dispatch<any>) =>
    bindActionCreators(
      {
        ...UserActions,
      },
      dispatch,
    ),
)(Home);
