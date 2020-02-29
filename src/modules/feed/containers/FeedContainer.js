// @flow
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Feed from '../components/Feed/Feed';
import {actions as FeedActions} from '../duck';

import type {RootState} from '../../index';
import type {Dispatch} from 'redux';

function mapStateToProps(state: RootState) {
  return {
    isFetching: state.feed.isFetching,
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators(
    {
      ...FeedActions,
    },
    dispatch,
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Feed);
